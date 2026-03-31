import { beforeEach, describe, expect, it } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useScheduleStore } from "../src/stores/schedule";

describe("schedule store", () => {
  beforeEach(() => {
    localStorage.clear();
    setActivePinia(createPinia());
  });

  it("cria compromisso valido", () => {
    const store = useScheduleStore();
    store.createCommitment({
      name: "Reuniao",
      date: "2026-03-31",
      time: "10:00",
      notes: "Notas"
    });
    expect(store.commitments.length).toBe(1);
    expect(store.commitments[0].name).toBe("Reuniao");
  });

  it("arquiva compromisso", () => {
    const store = useScheduleStore();
    store.createCommitment({
      name: "Arquivar",
      date: "2026-03-31",
      time: "11:00",
      notes: ""
    });
    const id = store.commitments[0].id;
    store.archiveCommitment(id);
    expect(store.commitments.length).toBe(0);
    expect(store.archivedCommitments.length).toBe(1);
  });

  it("remove compromisso", () => {
    const store = useScheduleStore();
    store.createCommitment({
      name: "Consulta",
      date: "2026-03-31",
      time: "14:00",
      notes: ""
    });
    const id = store.commitments[0].id;
    store.removeCommitment(id);
    expect(store.commitments.length).toBe(0);
  });
});
