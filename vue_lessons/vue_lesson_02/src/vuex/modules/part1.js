// count example

// shared state
// state used as: state.part1.count
const state = {
  count: 0,
  history: []
}

const getters = {
  count: state => state.count,
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  recentHistory: state => {
    const limit = 5
    const end = state.history.length
    const begin = end - limit < 0 ? 0 : (end - limit)
    return state.history.slice(begin, end).toString().replace(/,/g, ', ')
  }
}

const mutations = {
  increment (state, playload) {
    if (playload) {
      state.count += playload.amount
    } else {
      state.count++
    }
    state.history.push('add')
  },
  decrement (state) {
    state.count--
    state.history.push('min')
  }
}

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }, playload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment', playload)
        resolve()
      }, 500)
    })
  },
  incrementAsyncAndRet: ({ commit }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve('increment done.')
      }, 500)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
