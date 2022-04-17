import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    auth: document.cookie.replace(";", "=").split("=").includes("jwt"),
  }),
  actions: {
    toggle() {
      this.$state.auth = !this.$state.auth;
    },
    setTrue() {
      this.$state.auth = true;
    },
    setFalse() {
      this.$state.auth = false;
    },
  },
  getters: {
    getAuth: ({ auth }) => {
      return auth;
    },
  },
});
