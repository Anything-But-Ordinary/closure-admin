import { createRouter, createWebHistory } from "vue-router";
import App from "../App";
// import { LoadingGuard } from "./guard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "login",
      name: "main",
      meta: {
        name: "root",
      },
      component: App,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/register"),
    },
    // {
    //   path: "/loading",
    //   beforeEnter: (to, from, next) => {
    //     if (from.path === "/") {
    //       // return true;
    //       next();
    //     }
    //     return false;
    //   },
    //   name: "loading",
    //   component: () => import("@/views/loading"),
    // },
  ],
});

export default router;
