import { createRouter, createWebHistory } from "vue-router";
import App from "../App";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: App,
    },
  ],
});

export default router;
