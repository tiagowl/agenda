import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import AgendaView from "../views/AgendaView.vue";
import DataTransferView from "../views/DataTransferView.vue";
import PendingCommitmentsView from "../views/PendingCommitmentsView.vue";
import CompletedCommitmentsView from "../views/CompletedCommitmentsView.vue";
import ArchivedCommitmentsView from "../views/ArchivedCommitmentsView.vue";
import { useAuthStore } from "../stores/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/agenda" },
    { path: "/login", component: LoginView, meta: { public: true } },
    { path: "/agenda", component: AgendaView },
    { path: "/pendentes", component: PendingCommitmentsView },
    { path: "/realizados", component: CompletedCommitmentsView },
    { path: "/arquivados", component: ArchivedCommitmentsView },
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
