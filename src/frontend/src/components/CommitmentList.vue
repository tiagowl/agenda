<template>
  <div class="space-y-2">
    <p v-if="items.length === 0" class="card text-sm text-slate-500">{{ emptyMessage }}</p>
    <article v-for="item in items" :key="item.id" class="card">
      <div class="flex items-start justify-between gap-3">
        <div class="flex min-w-0 flex-1 items-start gap-3">
          <label class="mt-1 inline-flex items-center">
            <input
              type="checkbox"
              :checked="selectedIds.includes(item.id)"
              @change="$emit('toggleSelect', item.id)"
              :aria-label="`Selecionar compromisso ${item.name}`"
            />
          </label>
          <div class="min-w-0">
          <p class="font-semibold text-slate-900">{{ item.name }}</p>
          <p class="text-sm text-slate-600">{{ item.date }} - {{ item.time }}</p>
          <div
            v-if="plainTextFromRichText(item.notes)"
            class="mt-2 text-sm text-slate-700"
            v-html="sanitizeRichText(item.notes)"
          />
          <p v-else class="mt-2 text-sm text-slate-500">Sem observacoes.</p>
          </div>
        </div>
        <div class="flex shrink-0 flex-col gap-2">
          <button v-if="showEdit" class="btn-secondary" type="button" @click="$emit('edit', item)">Editar</button>
          <button
            v-if="showArchive"
            class="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
            type="button"
            @click="$emit('archive', item.id)"
          >
            Arquivar
          </button>
          <button class="btn-danger" type="button" @click="$emit('remove', item.id)">Excluir</button>
        </div>
      </div>
      <p class="mt-2 text-xs" :class="item.completed ? 'text-green-700' : 'text-amber-700'">
        {{ item.completed ? "Realizado" : "Nao realizado" }}
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">
import type { Commitment } from "../types";
import { plainTextFromRichText, sanitizeRichText } from "../utils/richText";

withDefaults(
  defineProps<{
    items: Commitment[];
    selectedIds?: string[];
    showEdit?: boolean;
    showArchive?: boolean;
    emptyMessage?: string;
  }>(),
  {
    selectedIds: () => [],
    showEdit: true,
    showArchive: true,
    emptyMessage: "Nenhum compromisso neste recorte."
  }
);
defineEmits<{
  (event: "edit", payload: Commitment): void;
  (event: "remove", id: string): void;
  (event: "toggleSelect", id: string): void;
  (event: "archive", id: string): void;
}>();
</script>
