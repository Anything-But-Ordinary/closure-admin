import { createRouter, createWebHistory } from "vue-router";
import App from "../App";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
      name: "main",
      component: App,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login"),
    },
  ],
});

export default router;
