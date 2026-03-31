<template>
  <section class="space-y-4">
    <header class="card">
      <h2 class="text-xl font-semibold">Importar e Exportar</h2>
      <p class="text-sm text-slate-600">Faca backup dos dados e restaure com arquivo JSON valido.</p>
    </header>

    <article class="card space-y-3">
      <h3 class="font-semibold">Exportar dados</h3>
      <button class="btn-primary" @click="onExport">Exportar JSON</button>
    </article>

    <article class="card space-y-3">
      <h3 class="font-semibold">Importar dados</h3>
      <input class="input" type="file" accept=".json,application/json" @change="onFileChange" />
      <button class="btn-secondary" :disabled="!fileContent" @click="onImport">Importar arquivo selecionado</button>
      <p v-if="message" class="text-sm" :class="messageType === 'error' ? 'text-red-700' : 'text-green-700'">
        {{ message }}
      </p>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { exportJSON, parseImportJSON } from "../services/importExport";
import { useScheduleStore } from "../stores/schedule";

const schedule = useScheduleStore();
const fileContent = ref("");
const message = ref("");
const messageType = ref<"success" | "error">("success");

function onExport() {
  exportJSON(schedule.data);
  messageType.value = "success";
  message.value = "Exportacao concluida.";
}

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    fileContent.value = String(reader.result ?? "");
    message.value = "";
  };
  reader.readAsText(file);
}

function onImport() {
  try {
    const parsed = parseImportJSON(fileContent.value);
    schedule.replaceData(parsed);
    messageType.value = "success";
    message.value = "Importacao concluida com sucesso.";
  } catch {
    messageType.value = "error";
    message.value = "Arquivo invalido. Os dados atuais foram mantidos.";
  }
}
</script>
