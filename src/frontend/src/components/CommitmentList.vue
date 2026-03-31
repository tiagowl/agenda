<template>
  <div class="space-y-2">
    <p v-if="items.length === 0" class="card text-sm text-slate-500">Nenhum compromisso neste recorte.</p>
    <article v-for="item in items" :key="item.id" class="card">
      <div class="flex items-start justify-between gap-3">
        <div>
          <p class="font-semibold text-slate-900">{{ item.name }}</p>
          <p class="text-sm text-slate-600">{{ item.date }} - {{ item.time }}</p>
          <p class="mt-2 whitespace-pre-wrap text-sm text-slate-700">{{ item.notes || "Sem observacoes." }}</p>
        </div>
        <button class="btn-secondary" @click="$emit('edit', item)">Editar</button>
      </div>
      <p class="mt-2 text-xs" :class="item.completed ? 'text-green-700' : 'text-amber-700'">
        {{ item.completed ? "Realizado" : "Nao realizado" }}
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">
import type { Commitment } from "../types";

defineProps<{ items: Commitment[] }>();
defineEmits<{ (event: "edit", payload: Commitment): void }>();
</script>
