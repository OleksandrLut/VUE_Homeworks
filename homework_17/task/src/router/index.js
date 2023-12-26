import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import store from "@/store";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      requiredAuth: false, 
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: {
      requiredAuth: false, 
    },
  },
  {
    path: "/editor/:productId?",
    name: "editor",
    component: () =>
      import(/* webpackChunkName: "editor" */ "../views/EditorPage.vue"),
    meta: {
      requiredAuth: true,
    },
    props:true,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () =>
      import(/* webpackChunkName: "contacts" */ "../views/ContactsPage.vue"),
      meta: {
      requiredAuth: true, 
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/CartPage.vue"),
    meta: {
      requiredAuth: false,
    },
    props:true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "pageNotFound",
    component: () => import("@/views/PageNotFound.vue"),
    meta: {
      requireAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
 if (to.meta?.requiredAuth) {
    let isAuthenticated = store.state.auth.user
    if (!isAuthenticated) isAuthenticated = 
    await store.dispatch('auth/loginWithCredential')
    if (!isAuthenticated) return {
      name: 'login',
      query: { redirect: to.fullPath },
    }
  }
})

export default router;
