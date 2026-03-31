<template>
  <div class="fixed inset-0 z-30 bg-black/40" @click.self="$emit('close')">
    <div class="absolute right-0 top-0 h-full w-full max-w-xl bg-white p-4 shadow-xl">
      <div class="mb-2 flex items-center justify-between">
        <h2 class="text-lg font-semibold">{{ isEditing ? "Editar compromisso" : "Novo compromisso" }}</h2>
        <button class="btn-secondary" type="button" @click="$emit('close')">Fechar</button>
      </div>

      <form class="mt-4 flex h-[calc(100%-3rem)] flex-col space-y-3" @submit.prevent="submit">
        <div class="space-y-3 overflow-y-auto pr-1">
        <label class="block">
          <span class="mb-1 block text-sm">Nome*</span>
          <input v-model="form.name" class="input" required />
        </label>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label class="block">
            <span class="mb-1 block text-sm">Data*</span>
            <input v-model="form.date" class="input" type="date" required />
          </label>
          <label class="block">
            <span class="mb-1 block text-sm">Horario*</span>
            <input v-model="form.time" class="input" type="time" required />
          </label>
        </div>

        <label class="block">
          <span class="mb-1 block text-sm">Observacoes (rich text simplificado)</span>
          <textarea v-model="form.notes" class="input min-h-28" />
        </label>

        <label v-if="isEditing" class="inline-flex items-center gap-2 text-sm">
          <input v-model="form.completed" type="checkbox" />
          Marcar como realizado
        </label>

        <p v-if="error" class="text-sm text-red-700">{{ error }}</p>
        </div>

        <div class="mt-auto flex flex-wrap justify-end gap-2 border-t border-slate-200 pt-3">
          <button class="btn-secondary" type="button" @click="$emit('close')">Cancelar</button>
          <button v-if="isEditing" class="btn-danger" type="button" @click="$emit('remove', form.id)">Excluir</button>
          <button class="btn-primary" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import type { Commitment } from "../types";

const props = defineProps<{ modelValue?: Commitment }>();
const emit = defineEmits<{
  (event: "close"): void;
  (event: "save", payload: Pick<Commitment, "id" | "name" | "date" | "time" | "notes" | "completed">): void;
  (event: "remove", id: string): void;
}>();

const isEditing = ref(false);
const error = ref("");
const form = reactive({
  id: "",
  name: "",
  date: "",
  time: "",
  notes: "",
  completed: false
});

watch(
  () => props.modelValue,
  (value) => {
    isEditing.value = Boolean(value);
    form.id = value?.id ?? "";
    form.name = value?.name ?? "";
    form.date = value?.date ?? "";
    form.time = value?.time ?? "";
    form.notes = value?.notes ?? "";
    form.completed = value?.completed ?? false;
    error.value = "";
  },
  { immediate: true }
);

function submit() {
  if (!form.name || !form.date || !form.time) {
    error.value = "Nome, data e horario sao obrigatorios.";
    return;
  }
  emit("save", { ...form });
}
</script>
