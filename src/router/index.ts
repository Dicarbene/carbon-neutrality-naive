import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/model",
      name: "model",
      component: () => import("../views/ModelResultView/index.vue"),
    },
    {
      name: "carbon-decoupling",
      path: "/carbon-decoupling",
      component: () => import("../views/CarbonDecouplingView/index.vue"),
    },
    {
      name: "api-docs",
      path: "/docs",
      component: () => import("../views/ApiDocsView/index.vue"),
    },
    {
      name: "login-register",
      path: "/loginregister",
      component: () => import("../views/LoginRegisterView/index.vue"),
    },
    {
      name: "user-center",
      path: "/usercenter",
      component: () => import("../views/UserCenterView/index.vue"),
    },
  ],
});

export default router;
