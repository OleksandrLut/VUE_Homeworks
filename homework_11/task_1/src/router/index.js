import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/drivers",
    name: "drivers",
    component: () =>
      import(/* webpackChunkName: "drivers" */ "../views/DriversView.vue"),
  },
  {
    path: "/busses",
    name: "busses",
    component: () =>
      import(/* webpackChunkName: "busses" */ "../views/BussesView.vue"),
  },
  {
    path: "/appointment",
    name: "appointment",
    component: () =>
      import(/* webpackChunkName: "appointment" */ "../views/AppointmentView.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () =>
      import(/* webpackChunkName: "contacts" */ "../views/ContactsView.vue"),
  },
  {
    path: "/editor/:driverId?",
    name: "editor",
    component: () =>
      import(/* webpackChunkName: "editor" */ "@/components/Drivers/DriverEditor.vue"),
  },
  {
    path: "/editor_bus/:busId?",
    name: "editor_bus",
    component: () =>
      import(/* webpackChunkName: "editor_bus" */ "@/components/Busses/BusEditor.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

