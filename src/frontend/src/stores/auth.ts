import { defineStore } from "pinia";

interface AuthState {
  isAuthenticated: boolean;
  error: string;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    isAuthenticated: false,
    error: ""
  }),
  actions: {
    login(username: string, password: string) {
      const validUsername = import.meta.env.VITE_APP_USERNAME ?? "admin";
      const validPassword = import.meta.env.VITE_APP_PASSWORD ?? "admin123";

      if (!username || !password) {
        this.error = "Preencha usuario e senha.";
        return false;
      }

      if (username === validUsername && password === validPassword) {
        this.isAuthenticated = true;
        this.error = "";
        return true;
      }

      this.error = "Credenciais invalidas.";
      return false;
    },
    logout() {
      this.isAuthenticated = false;
    }
  }
});
