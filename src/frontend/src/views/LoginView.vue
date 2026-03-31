<template>
  <section class="mx-auto mt-8 max-w-md">
    <div class="card">
      <h2 class="text-xl font-semibold">Entrar</h2>
      <p class="mt-1 text-sm text-slate-600">Acesse sua agenda pessoal.</p>

      <form class="mt-4 space-y-3" @submit.prevent="onSubmit">
        <label class="block">
          <span class="mb-1 block text-sm">Usuario</span>
          <input v-model="username" class="input" autocomplete="username" />
        </label>
        <label class="block">
          <span class="mb-1 block text-sm">Senha</span>
          <input v-model="password" class="input" type="password" autocomplete="current-password" />
        </label>
        <p v-if="auth.error" class="text-sm text-red-700">{{ auth.error }}</p>
        <button class="btn-primary w-full" type="submit">Entrar</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const auth = useAuthStore();
const router = useRouter();
const username = ref("");
const password = ref("");

function onSubmit() {
  if (auth.login(username.value, password.value)) {
    router.push("/agenda");
  }
}
</script>
