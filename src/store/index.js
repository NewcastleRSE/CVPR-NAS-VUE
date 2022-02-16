import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage : 0
  },
  actions: {
    setCurrentPage({ commit }, { currentPage } ) {
      commit('setCurrentPage ', { currentPage  });
    }
  },
  mutations: {
    setCurrentPage(state, currentPage ){
      state.currentPage = currentPage;
    }
  }
})
