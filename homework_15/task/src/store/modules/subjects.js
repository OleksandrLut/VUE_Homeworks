export default {
  namespaced: true,
  
  state: {
    subjects: [
      { id: 1, title: 'Математика' },
      { id: 2, title: 'Фізика' },
      { id: 3, title: 'Історія' },
      { id: 4, title: 'Хімія' },
      { id: 5, title: 'Література' },
      { id: 6, title: 'Фізкультура' },
    ]
  },
  getters: {
    getSubjectById:(state) => (subjectId)=>state.subjects.find(subject => subject.id === subjectId),
    getSubjectsList:(state) => state.subjects,
  },
  mutations: {},
  actions: {},
  modules: {},
};