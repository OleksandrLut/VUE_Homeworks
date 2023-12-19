import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/drivers",
    name: "drivers",
    component: () => import("@/views/DriversPage.vue"),
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: "editor/:title/:driverId?",
        name: "editor",
        component: () => import("@/views/EditorDrivers.vue"),
        meta: {
          requireAuth: true,
        },
        props: true,
        beforeEnter: (to, from, next) => {
          if (from.name === 'drivers') {
            if (['add', 'edit'].includes(to.params.title)) {
              next();
            } else {
              next({ name: 'drivers' });
            }
          } else {
            next({ name: 'drivers' });
          }
        },
      }
    ]
  },
  {
    path: "/login",
    name: "loginPage",
    component: () => import("@/views/LoginPage.vue"),
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/busses",
    name: "busses",
    component: () => import("@/views/BussesPage.vue"),
    meta: {
      requireAuth: false,
    },
    children: [
      {
        path: "bus-editor/:title/:busId?",
        name: "bus-editor",
        component: () => import("@/views/EditorBusses.vue"),
        meta: {
          requireAuth: true,
        },
        props: true,
        beforeEnter: (to, from, next) => {
          if (from.name === 'busses') {
            if (['add', 'bus-edit'].includes(to.params.title)) {
              next();
            } else {
              next({ name: 'busses' });
            }
          } else {
            next({ name: 'busses' });
          }
        },
      }
    ]
  },
  {
    path: "/appointments",
    name: "appointments",
    component: () => import("@/views/AppointmentsPage.vue"),
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("@/views/ContactsPage.vue"),
    meta: {
      requireAuth: false,
    },
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

export default router;
