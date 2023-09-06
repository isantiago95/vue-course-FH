import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Recolectar piedras infinito', completed: false },
      { id: '2', text: 'Piedra del alma', completed: true },
      { id: '3', text: 'Piedra del poder', completed: true },
      { id: '4', text: 'Piedra del realidad', completed: false },
      { id: '5', text: 'Conseguir nuevos secuaces competentes', completed: false },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    pendingTodos: (state, getters, rootState) => state.todos.filter(t => !t.completed),
    completedTodos: (state, getters, rootState) => state.todos.filter(t => t.completed),
    allTodos: (state, getters, rootState) => state.todos,
    getTodosByTab: (_, getters) => (tab) => {
      const options = {
        all: getters.allTodos,
        pending: getters.pendingTodos,
        completed: getters.completedTodos
      };

      return options[tab];
    }
  },
  modules: {
  }
});
