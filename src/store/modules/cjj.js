import { getInfo } from '@/api/index'

export default {
  namespaced: true,
  state:{
    num: 123,
    name: ''
  },
  getters: {},
  actions: {
    async initname ({commit}) {
      await getInfo()
      commit('SET_NAME','cjj')
    }
  },
  mutations: {
    SET_NUM (state, payload) {
      state.num = payload
    },
    SET_NAME (state, payload) {
      state.name = payload
    },
  }
};
