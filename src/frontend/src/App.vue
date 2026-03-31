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
        <RouterLink class="tab-btn" :class="{ 'tab-btn-active': route.path === '/agenda' }" to="/agenda">
          <svg class="tab-btn-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          <span>Agenda</span>
        </RouterLink>
        <RouterLink class="tab-btn" :class="{ 'tab-btn-active': route.path === '/pendentes' }" to="/pendentes">
          <svg class="tab-btn-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span>Pendentes</span>
        </RouterLink>
        <RouterLink class="tab-btn" :class="{ 'tab-btn-active': route.path === '/realizados' }" to="/realizados">
          <svg class="tab-btn-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          <span>Realizados</span>
        </RouterLink>
        <RouterLink class="tab-btn" :class="{ 'tab-btn-active': route.path === '/dados' }" to="/dados">
          <svg class="tab-btn-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span>Dados</span>
        </RouterLink>
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
