import { login, getInfo } from '@/api/index'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  info: {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(token)
  },
  SET_INFO: (state, info) => {
    state.info = info
  },
  SET_INFO_NAME: (state, {data}) => {
    state.info.author_name = data
  },

}

const actions = {
  async login({ commit }, payload) {
    const {token} = await login(payload.data)
    commit('SET_TOKEN',token )
    payload.callback && payload.callback()
  },
  async info({ commit, rootState, rootGetters }) {
    console.log(rootState, rootGetters)
    commit('SET_INFO',await getInfo())
    commit('setAdmin','cjj',{root: true})
    commit('cjj/SET_NUM',321,{root: true})
  },
  async resetToken({ commit }) {
    commit('SET_TOKEN', '')
    removeToken()
  },
  async me({ commit }) {
    commit('setAdmin','ab')
    commit('cjj/SET_NUM','aa',{root: true})
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
