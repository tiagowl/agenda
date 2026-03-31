import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../src/views/LoginView.vue";

describe("LoginView", () => {
  it("renderiza campos de login", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [{ path: "/agenda", component: { template: "<div />" } }]
    });
    const wrapper = mount(LoginView, {
      global: {
        plugins: [createPinia(), router]
      }
    });
    expect(wrapper.text()).toContain("Entrar");
    expect(wrapper.find('input[type="password"]').exists()).toBe(true);
  });
});
