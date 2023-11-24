import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PaymentPage from "@/views/PaymentPage";
import ShopPage from "@/views/ShopPage";
import ProductsGallery from "@/components/ProductsGallery";
import ContactsPage from "@/views/ContactsPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/payment",
    name: "payment",
    component: PaymentPage,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopPage,
  },
  {
    path: "/shop/:productCategory",
    name: "shop-gallery",
    component: ProductsGallery,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
