import { beforeEach, describe, expect, it, vi } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useAuthStore } from "../src/stores/auth";

describe("auth store", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_APP_USERNAME", "user");
    vi.stubEnv("VITE_APP_PASSWORD", "pass");
    setActivePinia(createPinia());
  });

  it("faz login com credenciais corretas", () => {
    const store = useAuthStore();
    const result = store.login("user", "pass");
    expect(result).toBe(true);
    expect(store.isAuthenticated).toBe(true);
  });

  it("rejeita credenciais invalidas", () => {
    const store = useAuthStore();
    const result = store.login("x", "y");
    expect(result).toBe(false);
    expect(store.error).toContain("invalidas");
  });
});
