<template>
  <section class="space-y-4">
    <div class="card flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 class="text-xl font-semibold">Agenda</h2>
        <p class="text-sm text-slate-600">Gerencie seus compromissos com visualizacao diaria, semanal e mensal.</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <button class="btn-primary" @click="openCreate">Novo compromisso</button>
      </div>
    </div>

    <div class="card space-y-3">
      <div class="flex flex-wrap items-center gap-2">
        <button
          v-for="mode in modes"
          :key="mode"
          class="btn-secondary"
          :class="{ '!bg-brand !text-white': selectedMode === mode }"
          @click="selectedMode = mode"
        >
          {{ modeLabel(mode) }}
        </button>
      </div>

      <label class="block max-w-xs">
        <span class="mb-1 block text-sm">Data de referencia</span>
        <input v-model="schedule.selectedDate" class="input" type="date" />
      </label>
    </div>

    <div
      v-if="filteredItems.length > 0"
      class="card flex flex-wrap items-center justify-between gap-2 border-slate-200 bg-slate-50"
    >
      <button class="btn-secondary" type="button" @click="toggleSelectAllFiltered">
        {{ allFilteredSelected ? "Desmarcar todos" : "Marcar todos" }}
      </button>
      <button
        v-if="selectedIds.length > 0"
        class="btn-danger"
        type="button"
        @click="removeSelected"
      >
        Excluir marcados ({{ selectedIds.length }})
      </button>
    </div>

    <CommitmentList
      :items="filteredItems"
      :selected-ids="selectedIds"
      @edit="openEdit"
      @remove="removeItem"
      @toggle-select="toggleSelect"
    />

    <CommitmentFormModal
      v-if="showModal"
      :model-value="editing"
      @close="closeModal"
      @save="saveItem"
      @remove="removeItem"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import CommitmentFormModal from "../components/CommitmentFormModal.vue";
import CommitmentList from "../components/CommitmentList.vue";
import { useScheduleStore } from "../stores/schedule";
import type { CalendarViewMode, Commitment } from "../types";
import { addDays, isSameMonth, startOfWeek, toISODate } from "../utils/date";

const schedule = useScheduleStore();
const selectedMode = ref<CalendarViewMode>("day");
const modes: CalendarViewMode[] = ["day", "week", "month"];
const showModal = ref(false);
const editing = ref<Commitment | undefined>(undefined);
const selectedIds = ref<string[]>([]);

const filteredItems = computed(() => {
  const selected = schedule.selectedDate;
  if (selectedMode.value === "day") {
    return schedule.commitments.filter((c) => c.date === selected);
  }
  if (selectedMode.value === "week") {
    const start = startOfWeek(selected);
    const allowed = Array.from({ length: 7 }).map((_, idx) => toISODate(addDays(start, idx)));
    return schedule.commitments.filter((c) => allowed.includes(c.date));
  }
  return schedule.commitments.filter((c) => isSameMonth(c.date, selected));
});

const allFilteredSelected = computed(() => {
  const list = filteredItems.value;
  if (list.length === 0) return false;
  return list.every((c) => selectedIds.value.includes(c.id));
});

function modeLabel(mode: CalendarViewMode): string {
  return mode === "day" ? "Dia" : mode === "week" ? "Semana" : "Mes";
}

function openCreate() {
  editing.value = undefined;
  showModal.value = true;
}

function openEdit(item: Commitment) {
  editing.value = item;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

function saveItem(payload: Pick<Commitment, "id" | "name" | "date" | "time" | "notes" | "completed">) {
  if (payload.id) {
    schedule.updateCommitment(payload.id, payload);
  } else {
    schedule.createCommitment(payload);
  }
  closeModal();
}

function removeItem(id: string) {
  schedule.removeCommitment(id);
  selectedIds.value = selectedIds.value.filter((selectedId) => selectedId !== id);
  closeModal();
}

function toggleSelect(id: string) {
  if (selectedIds.value.includes(id)) {
    selectedIds.value = selectedIds.value.filter((selectedId) => selectedId !== id);
    return;
  }
  selectedIds.value = [...selectedIds.value, id];
}

function removeSelected() {
  const idsToRemove = [...selectedIds.value];
  idsToRemove.forEach((id) => schedule.removeCommitment(id));
  selectedIds.value = [];
}

function toggleSelectAllFiltered() {
  if (allFilteredSelected.value) {
    selectedIds.value = [];
    return;
  }
  selectedIds.value = filteredItems.value.map((c) => c.id);
}
</script>
