<template>
  <div class="fixed inset-0 z-30 bg-slate-900/50 backdrop-blur-sm" @click.self="$emit('close')">
    <aside class="absolute right-0 top-0 h-full w-full max-w-xl border-l border-slate-200 bg-white shadow-2xl">
      <header class="border-b border-slate-200 bg-slate-50/80 px-5 py-4">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Compromisso</p>
            <h2 class="text-xl font-semibold text-slate-900">
              {{ isEditing ? "Editar compromisso" : "Novo compromisso" }}
            </h2>
            <p class="mt-1 text-sm text-slate-600">
              {{ isEditing ? "Atualize os detalhes e salve as alteracoes." : "Preencha os campos para criar um novo compromisso." }}
            </p>
          </div>
          <button class="btn-secondary" type="button" @click="$emit('close')">Fechar</button>
        </div>
      </header>

      <form class="flex h-[calc(100%-114px)] flex-col" @submit.prevent="submit">
        <div class="space-y-5 overflow-y-auto px-5 py-5">
          <section class="space-y-4 rounded-xl border border-slate-200 bg-white p-4">
            <h3 class="text-sm font-semibold text-slate-800">Informacoes principais</h3>
            <label class="block">
              <span class="mb-1.5 block text-sm font-medium text-slate-700">Nome*</span>
              <input v-model="form.name" class="input" required />
            </label>

            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label class="block">
                <span class="mb-1.5 block text-sm font-medium text-slate-700">Data*</span>
                <input v-model="form.date" class="input" type="date" required />
              </label>
              <label class="block">
                <span class="mb-1.5 block text-sm font-medium text-slate-700">Horario*</span>
                <input v-model="form.time" class="input" type="time" required />
              </label>
            </div>
          </section>

          <section class="space-y-3 rounded-xl border border-slate-200 bg-white p-4">
            <div>
              <h3 class="text-sm font-semibold text-slate-800">Observacoes</h3>
              <p class="text-xs text-slate-500">Use a barra para formatar o texto.</p>
            </div>

            <div class="overflow-hidden rounded-lg border border-slate-300">
              <div class="flex flex-wrap gap-2 border-b border-slate-200 bg-slate-50 p-2">
                <button class="btn-secondary !px-2.5 !py-1 text-xs" type="button" @click="applyFormat('bold')"><strong>B</strong></button>
                <button class="btn-secondary !px-2.5 !py-1 text-xs" type="button" @click="applyFormat('italic')"><em>I</em></button>
                <button class="btn-secondary !px-2.5 !py-1 text-xs" type="button" @click="applyFormat('underline')"><u>U</u></button>
                <button class="btn-secondary !px-2.5 !py-1 text-xs" type="button" @click="applyFormat('insertUnorderedList')">Lista</button>
              </div>
              <div
                ref="editorRef"
                class="min-h-36 w-full p-3 text-sm text-slate-800 focus:outline-none"
                contenteditable="true"
                @input="onEditorInput"
              />
            </div>
          </section>

          <label
            v-if="isEditing"
            class="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
          >
            <input v-model="form.completed" type="checkbox" />
            Marcar como realizado
          </label>

          <p v-if="error" class="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{{ error }}</p>
        </div>

        <footer class="mt-auto flex flex-wrap justify-end gap-2 border-t border-slate-200 bg-white px-5 py-4">
          <button class="btn-secondary" type="button" @click="$emit('close')">Cancelar</button>
          <button v-if="isEditing" class="btn-danger" type="button" @click="$emit('remove', form.id)">Excluir</button>
          <button class="btn-primary" type="submit">Salvar compromisso</button>
        </footer>
      </form>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { nextTick, reactive, ref, watch } from "vue";
import type { Commitment } from "../types";
import { sanitizeRichText } from "../utils/richText";

const props = defineProps<{ modelValue?: Commitment }>();
const emit = defineEmits<{
  (event: "close"): void;
  (event: "save", payload: Pick<Commitment, "id" | "name" | "date" | "time" | "notes" | "completed">): void;
  (event: "remove", id: string): void;
}>();

const isEditing = ref(false);
const error = ref("");
const editorRef = ref<HTMLElement | null>(null);
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
    nextTick(() => {
      if (editorRef.value) {
        editorRef.value.innerHTML = sanitizeRichText(form.notes);
      }
    });
  },
  { immediate: true }
);

function onEditorInput() {
  form.notes = sanitizeRichText(editorRef.value?.innerHTML ?? "");
}

function applyFormat(command: "bold" | "italic" | "underline" | "insertUnorderedList") {
  document.execCommand(command);
  onEditorInput();
}

function submit() {
  if (!form.name || !form.date || !form.time) {
    error.value = "Nome, data e horario sao obrigatorios.";
    return;
  }
  emit("save", { ...form, notes: sanitizeRichText(form.notes) });
}
</script>
