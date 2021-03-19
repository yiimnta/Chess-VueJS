import {
  LOGIN,
  SIGNUP
} from '@/graphql/mutations'

// import { getUser } from '@/graphql/queries'

import { SET_TOKEN, SET_USER } from '.'

export const state = () => ({
  token: null,
  currentUser: null,
  listGames: [
    { id: 1, board: ['rnbqkbnr', 'pppppppp', '8', '8', '8', '8', 'PPPPPPPP', 'RNBQKBNR'] }
  ]
})

export const getters = {
  isAuthenticated (state) {
    return !!state.token
  }
}

export const mutations = {
  async [SET_TOKEN] (state, token) {
    state.token = token

    if (token) {
      await this.$apolloHelpers.onLogin(token)
    } else {
      await this.$apolloHelpers.onLogout()
    }
  },
  [SET_USER] (state, user) {
    state.currentUser = user
  }
}

export const actions = {
  async login ({ commit }, { email, password }) {
    // login and set token for vuex
    const res = await this.app.apolloProvider.defaultClient.mutate({
      mutation: LOGIN,
      variables: { email, password }
    })

    const token = res.data.login
    await commit(SET_TOKEN, token)

    // // get user's infor from token
    // const response = await this.app.apolloProvider.defaultClient.query({
    //   query: getUser,
    //   variables: { token }
    // })
    // const userInfor = response.data
    // await commit(SET_USER, userInfor)
  },
  async signup ({ commit }, { name, email, password }) {
    const res = await this.app.apolloProvider.defaultClient.mutate({
      mutation: SIGNUP,
      variables: { name, email, password }
    })

    const token = res.data.signup
    await commit(SET_TOKEN, token)
  },
  async logout ({ commit }) {
    await commit(SET_TOKEN, null)
    await commit(SET_USER, null)
  }
}
