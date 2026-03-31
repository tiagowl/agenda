import { defineStore } from "pinia";
import type { AppData, Commitment } from "../types";
import { loadData, saveData } from "../services/persistence";
import { sortCommitments, todayISO } from "../utils/date";

interface ScheduleState {
  data: AppData;
  selectedDate: string;
}

function uid(): string {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
}

export const useScheduleStore = defineStore("schedule", {
  state: (): ScheduleState => ({
    data: loadData(),
    selectedDate: todayISO()
  }),
  getters: {
    commitments: (state) => sortCommitments(state.data.commitments.filter((c) => !c.archived)),
    archivedCommitments: (state) => sortCommitments(state.data.commitments.filter((c) => c.archived)),
    pendingUpcomingCommitments: (state): Commitment[] =>
      sortCommitments(
        state.data.commitments.filter((c) => {
          if (c.archived || c.completed) return false;
          const commitmentDate = new Date(`${c.date}T${c.time}:00`);
          return commitmentDate.getTime() >= Date.now();
        })
      ),
    commitmentsToday: (state): Commitment[] =>
      sortCommitments(
        state.data.commitments.filter((c) => !c.archived && c.date === todayISO())
      ),
    totalMarked(): number {
      return this.commitments.length;
    },
    notHappened(): number {
      const now = Date.now();
      return this.commitments.filter((c) => {
        if (c.completed) return false;
        const commitmentDate = new Date(`${c.date}T${c.time}:00`);
        return commitmentDate.getTime() < now;
      }).length;
    }
  },
  actions: {
    sync() {
      saveData(this.data);
    },
    setSelectedDate(date: string) {
      this.selectedDate = date;
    },
    createCommitment(payload: Pick<Commitment, "name" | "date" | "time" | "notes">) {
      if (!payload.name || !payload.date || !payload.time) {
        throw new Error("Nome, data e horario sao obrigatorios.");
      }
      const now = new Date().toISOString();
      this.data.commitments.push({
        id: uid(),
        name: payload.name,
        date: payload.date,
        time: payload.time,
        notes: payload.notes,
        completed: false,
        archived: false,
        createdAt: now,
        updatedAt: now
      });
      this.sync();
    },
    updateCommitment(id: string, payload: Pick<Commitment, "name" | "date" | "time" | "notes" | "completed">) {
      const item = this.data.commitments.find((c) => c.id === id);
      if (!item) return;
      item.name = payload.name;
      item.date = payload.date;
      item.time = payload.time;
      item.notes = payload.notes;
      item.completed = payload.completed;
      item.updatedAt = new Date().toISOString();
      this.sync();
    },
    removeCommitment(id: string) {
      this.data.commitments = this.data.commitments.filter((c) => c.id !== id);
      this.sync();
    },
    archiveCommitment(id: string) {
      const item = this.data.commitments.find((c) => c.id === id);
      if (!item || item.archived) return;
      item.archived = true;
      item.updatedAt = new Date().toISOString();
      this.sync();
    },
    replaceData(next: AppData) {
      const list = Array.isArray(next.commitments) ? next.commitments : [];
      this.data = {
        version: next.version ?? "1.0.0",
        commitments: list.map((c) => ({
          id: c.id,
          name: c.name ?? "",
          date: c.date ?? "",
          time: c.time ?? "",
          notes: c.notes ?? "",
          completed: Boolean(c.completed),
          archived: c.archived === true,
          createdAt: c.createdAt ?? new Date().toISOString(),
          updatedAt: c.updatedAt ?? new Date().toISOString()
        }))
      };
      this.sync();
    }
  }
});
