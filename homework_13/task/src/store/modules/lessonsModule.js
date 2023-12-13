import { lessons } from "@/data/schoolData";


export default {
  namespaced: true,
  
  state: {
    lessonsList: lessons
  },
  getters: {
    lessonsList:(state)=>state.lessonsList,
    getlessonById:(state)=>(lessonId)=>state.lessonsList.find(lesson=>lesson.id==lessonId)
  },
  mutations: {},
  actions: {},
  modules: {},
};