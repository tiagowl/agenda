import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import AgendaView from "../views/AgendaView.vue";
import DashboardView from "../views/DashboardView.vue";
import DataTransferView from "../views/DataTransferView.vue";
import PendingCommitmentsView from "../views/PendingCommitmentsView.vue";
import { useAuthStore } from "../stores/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/agenda" },
    { path: "/login", component: LoginView, meta: { public: true } },
    { path: "/agenda", component: AgendaView },
    { path: "/dashboard", component: DashboardView },
    { path: "/pendentes", component: PendingCommitmentsView },
    { path: "/dados", component: DataTransferView }
  ]
});

router.beforeEach((to) => {
  const auth = useAuthStore();
  if (to.meta.public) return true;
  if (!auth.isAuthenticated) return "/login";
  return true;
});

export default router;
