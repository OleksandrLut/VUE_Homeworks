import { teachers } from "@/data/schoolData";
import { sortTeachersBySubjectId } from "@/store/helper";

export default {
  namespaced: true,
  state: {
    teachersList: teachers
  },
  getters: {
    teachersList:(state)=>state.teachersList,
    getTeacherById:(state)=>(teacherId)=>state.teachersList.find(
      (teacher)=>teacher.id==teacherId
    ),
    getTeachersListByLessonId:(state)=>(lessonId)=>state.teachersList.filter(
      teacher=>teacher.subjectId == lessonId
    ),
    getSortedTeachersList:(state)=>sortTeachersBySubjectId(state.teachersList)
  },
  mutations: {},
  actions: {},
  modules: {},
}