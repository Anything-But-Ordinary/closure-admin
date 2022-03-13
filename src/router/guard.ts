import type { NavigationGuard } from "vue-router";

export const LoadingGuard: NavigationGuard = (to, from) => {
  return true;
};
