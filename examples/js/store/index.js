/* global Vuex */
import mutations from './mutations'

const moduleA = {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    updateCount(state, count) {
      if (count) {
        state.count += count;
      } else {
        state.count++;
      }
    }
  },
  actions: {
    doUpdateCount(context, count) {
      context.commit('updateCount', count)
    }
  },
  getters: {
    addCount: (state) => state.count + 1,
  }
}

export const getStore = (state) => new Vuex.Store({
  state,
  getters: {
    doneTodos: (state) => state.todos.filter((todo) => todo.done),
  },
  actions: {
    doUpdateCount(context) {
      context.commit('COUNT');
    }
  },
  mutations,
  modules: {
    a: moduleA
  }
})
