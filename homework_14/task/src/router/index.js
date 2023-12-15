import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/ProductsView.vue"),
  },
  {
    path: "/provisors",
    name: "provisors",
    component: () => import("@/views/ProvisorsView.vue"),
  },
  {
    path: "/products/editor",
    name: "editor",
    component: () => import("@/views/EditorProductView.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("@/views/ContactsView.vue"),
  },
  {
    path: "/shopping-rules",
    name: "shoppingRules",
    component: () => import("@/views/ShoppingRulesView.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
