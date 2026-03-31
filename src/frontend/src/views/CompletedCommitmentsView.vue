<template>
  <section class="space-y-4">
    <header class="card">
      <h2 class="text-xl font-semibold">Compromissos Realizados</h2>
      <p class="text-sm text-slate-600">Lista com todos os compromissos marcados como realizados.</p>
    </header>

    <div
      v-if="items.length > 0"
      class="card flex flex-wrap items-center justify-between gap-2 border-slate-200 bg-slate-50"
    >
      <button class="btn-secondary" type="button" @click="toggleSelectAll">
        {{ allSelected ? "Desmarcar todos" : "Marcar todos" }}
      </button>
      <button v-if="selectedIds.length > 0" class="btn-danger" type="button" @click="removeSelected">
        Excluir marcados ({{ selectedIds.length }})
      </button>
    </div>

    <CommitmentList
      :items="items"
      :selected-ids="selectedIds"
      empty-message="Nenhum compromisso realizado ainda."
      @edit="openEdit"
      @remove="deleteOne"
      @archive="archiveOne"
      @toggle-select="toggleSelect"
    />

    <CommitmentFormModal
      v-if="showModal"
      :model-value="editing"
      @close="closeModal"
      @save="saveItem"
      @remove="removeFromModal"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import CommitmentFormModal from "../components/CommitmentFormModal.vue";
import CommitmentList from "../components/CommitmentList.vue";
import { useScheduleStore } from "../stores/schedule";
import type { Commitment } from "../types";

const schedule = useScheduleStore();
const items = computed(() => schedule.commitments.filter((item) => item.completed));
const allSelected = computed(() => {
  const list = items.value;
  if (list.length === 0) return false;
  return list.every((c) => selectedIds.value.includes(c.id));
});
const selectedIds = ref<string[]>([]);
const showModal = ref(false);
const editing = ref<Commitment | undefined>(undefined);

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
  }
  closeModal();
}

function deleteOne(id: string) {
  schedule.removeCommitment(id);
  selectedIds.value = selectedIds.value.filter((sid) => sid !== id);
}

function archiveOne(id: string) {
  schedule.archiveCommitment(id);
  selectedIds.value = selectedIds.value.filter((sid) => sid !== id);
}

function removeFromModal(id: string) {
  deleteOne(id);
  closeModal();
}

function toggleSelect(id: string) {
  if (selectedIds.value.includes(id)) {
    selectedIds.value = selectedIds.value.filter((sid) => sid !== id);
    return;
  }
  selectedIds.value = [...selectedIds.value, id];
}

function toggleSelectAll() {
  if (allSelected.value) {
    selectedIds.value = [];
    return;
  }
  selectedIds.value = items.value.map((c) => c.id);
}

function removeSelected() {
  const ids = [...selectedIds.value];
  ids.forEach((id) => schedule.removeCommitment(id));
  selectedIds.value = [];
}
</script>
