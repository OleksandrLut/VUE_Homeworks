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
    path: "/teachers",
    name: "teachers",
    component: () => import("@/views/TeachersView.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/lessons",
    name: "lessons",
    component: () => import("@/views/LessonsView.vue"),
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: "select",
        name: "lessons-select",
        component: () => import("@/views/LessonsSelectView.vue"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: ":subjectId(\\d+)+",
        name: "teachers-select",
        component: () => import("@/views/TeachersSelectView.vue"),
        props: (route) => ({
          subjectId: route.params.subjectId.map(id => parseInt(id)),
        }),
        meta: {
          requireAuth: true,
        },
        beforeEnter(to, from){
          const authParams = localStorage.getItem('authParams')
          if(from.name !== "lessons-select"){
            if(!authParams) return { name: "pageNotFound"}
            else return {name: "lessons-select"}
          }
          if(!to.params.subjectId?.length){
            return {name: "lessons-select"}
          }
        }
      },
      {
        path: ":lessonsIdsPairs(\\d+-\\d+)+",
        name: "study-plan",
        component: () => import("@/views/StudyPlanView.vue"),
        props: true,
        meta: {
          requireAuth: true,
        },
        beforeEnter(to, from){
          if(from.name !== "teachers-select"){
            return { name: "pageNotFound"}
          }
          if(!to.params.lessonsIdsPairs?.length){
            return { name: "lessons-select" }
          }
        }
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
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

router.beforeEach((to)=>{
  const authParams = localStorage.getItem('authParams')
  if( to.meta.requireAuth && !authParams)
  return {
    name: 'login',
  }
})

export default router;
