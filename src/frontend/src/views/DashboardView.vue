<template>
  <section class="space-y-4">
    <header class="card">
      <h2 class="text-xl font-semibold">Dashboard</h2>
      <p class="text-sm text-slate-600">Resumo dos compromissos do dia vigente.</p>
    </header>

    <div class="grid gap-3 sm:grid-cols-3">
      <article class="card">
        <p class="text-sm text-slate-600">Compromissos de hoje</p>
        <p class="mt-2 text-3xl font-bold">{{ schedule.commitmentsToday.length }}</p>
      </article>
      <article class="card">
        <p class="text-sm text-slate-600">Total marcado</p>
        <p class="mt-2 text-3xl font-bold">{{ schedule.totalMarked }}</p>
      </article>
      <article class="card">
        <p class="text-sm text-slate-600">Nao aconteceram</p>
        <p class="mt-2 text-3xl font-bold">{{ schedule.notHappened }}</p>
      </article>
    </div>

    <article class="card">
      <h3 class="font-semibold">Lista do dia</h3>
      <ul class="mt-3 space-y-2 text-sm">
        <li v-for="item in schedule.commitmentsToday" :key="item.id" class="rounded-md bg-slate-100 p-2">
          <strong>{{ item.time }}</strong> - {{ item.name }}
        </li>
        <li v-if="schedule.commitmentsToday.length === 0" class="text-slate-500">Nenhum compromisso hoje.</li>
      </ul>
    </article>
  </section>
</template>

<script setup lang="ts">
import { useScheduleStore } from "../stores/schedule";

const schedule = useScheduleStore();
</script>
