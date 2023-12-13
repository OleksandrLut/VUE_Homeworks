import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import LoginPage from "../views/LoginPage.vue";
import store from "@/store";
import PageNotFound from "@/views/PageNotFound.vue"

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
    meta: {
      requireAuth: false,
      // authButtonTitle: 'Вихід',
    }
  },
  {
    path: "/lessons/select",
    name: "lessons",
    component: () => import("../views/LessonsView.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/lessons/:selected_lessons_id_list+",
    name: "selectedLessons",
    component: () => import("../views/SelectedLessons.vue"),
    props: true,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/lessons/:lessonTeacherPairs+",
    name: "lessonTeacherPairs",
    component: () => import("../views/LessonTeacherPairs.vue"),
    props: true,
    meta: {
      requireAuth: true,
    },
    beforeEnter: (to, from, next) => {
      if(!to.params.lessonTeacherPairs || to.params.lessonTeacherPairs.length === 0){
        next({
          name: 'lessons'
        })
      } else next()
    }
  },
   {
    path: "/teachers",
    name: "teachers",
    component: () => import("../views/TeachersView.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/loginPage",
    name: "loginPage",
    component: LoginPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "pageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.userName;

  if (to.meta.requireAuth && !isAuthenticated) {
    next({
      name: 'loginPage',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
});

export default router;
