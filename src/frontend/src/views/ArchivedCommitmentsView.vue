<template>
  <section class="space-y-4">
    <header class="card">
      <h2 class="text-xl font-semibold">Compromissos arquivados</h2>
      <p class="text-sm text-slate-600">Compromissos retirados da agenda ativa. Voce pode excluir individualmente ou em lote.</p>
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
      :show-edit="false"
      :show-archive="false"
      empty-message="Nenhum compromisso arquivado."
      @remove="deleteOne"
      @toggle-select="toggleSelect"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import CommitmentList from "../components/CommitmentList.vue";
import { useScheduleStore } from "../stores/schedule";

const schedule = useScheduleStore();
const items = computed(() => schedule.archivedCommitments);
const allSelected = computed(() => {
  const list = items.value;
  if (list.length === 0) return false;
  return list.every((c) => selectedIds.value.includes(c.id));
});
const selectedIds = ref<string[]>([]);

function deleteOne(id: string) {
  schedule.removeCommitment(id);
  selectedIds.value = selectedIds.value.filter((sid) => sid !== id);
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
