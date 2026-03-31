<template>
  <div class="min-h-screen">
    <header class="border-b bg-white">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <h1 class="text-lg font-bold text-slate-900">Agenda Pessoal</h1>
        <button v-if="auth.isAuthenticated" class="btn-danger" type="button" @click="logout">Sair</button>
      </div>
    </header>

    <main class="mx-auto max-w-5xl p-4 pb-24">
      <RouterView />
    </main>

    <nav
      v-if="auth.isAuthenticated"
      class="fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200 bg-white/95 backdrop-blur"
      aria-label="Navegacao principal"
    >
      <div class="mx-auto grid max-w-5xl grid-cols-4 gap-2 p-3">
        <RouterLink class="tab-btn" :class="{ 'tab-btn-active': route.path === '/agenda' }" to="/agenda">Agenda</RouterLink>
        <RouterLink class="tab-btn" :class="{ 'tab-btn-active': route.path === '/dashboard' }" to="/dashboard">Dashboard</RouterLink>
        <RouterLink class="tab-btn" :class="{ 'tab-btn-active': route.path === '/pendentes' }" to="/pendentes">Pendentes</RouterLink>
        <RouterLink class="tab-btn" :class="{ 'tab-btn-active': route.path === '/dados' }" to="/dados">Dados</RouterLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import { useAuthStore } from "./stores/auth";

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();

function logout() {
  auth.logout();
  router.push("/login");
}
</script>
