import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);
    },
    setTask(state, { index, task }) {
      Vue.set(state.tasks, index, task);
    },
  },
  actions: {
    createTask({ commit, state }, task) {
      commit('createTask', task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    updateTask({ commit, state }, { taskId, task }) {
      const index = state.tasks.findIndex((e) => e.id === taskId);
      if (index === -1) throw new Error('update task error');
      commit('setTask', { index, task: { ...state.tasks[index], ...task } });
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
  modules: {
  },

  getters: {
    tasks: (s) => s.tasks,
  },
});
