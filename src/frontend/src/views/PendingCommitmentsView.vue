<template>
  <section class="space-y-4">
    <header class="card">
      <h2 class="text-xl font-semibold">Compromissos Pendentes</h2>
      <p class="text-sm text-slate-600">Todos os compromissos marcados que ainda nao aconteceram.</p>
    </header>

    <article v-if="items.length === 0" class="card text-sm text-slate-500">
      Nenhum compromisso pendente no momento.
    </article>

    <article v-for="item in items" :key="item.id" class="card">
      <div class="flex items-start justify-between gap-3">
        <div>
          <p class="font-semibold text-slate-900">{{ item.name }}</p>
          <p class="text-sm text-slate-600">{{ item.date }} - {{ item.time }}</p>
          <p class="mt-2 whitespace-pre-wrap text-sm text-slate-700">{{ item.notes || "Sem observacoes." }}</p>
        </div>
        <span class="rounded-md bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">Pendente</span>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useScheduleStore } from "../stores/schedule";

const schedule = useScheduleStore();
const items = computed(() => schedule.pendingUpcomingCommitments);
</script>
