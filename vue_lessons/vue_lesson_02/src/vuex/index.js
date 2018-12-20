import Vue from 'vue'
import Vuex from 'vuex'

import part1 from './modules/part1'
import part2 from './modules/part2'

Vue.use(Vuex)

const getCount = store => {
  if (store.state.part1) {
    return store.state.part1.count
  }
  return store.state.count
}

// vuex plugin
const myPlugin = store => {
  // called when the store is initialized
  console.log('store init.')
  let preCount = getCount(store)
  // called after every mutation
  store.subscribe((mutations, state) => {
    let nextCount = getCount(store)
    console.info(`pre count: ${preCount}, next count: ${nextCount}.`)
    preCount = nextCount
  })
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    part1,
    part2
  },
  strict: debug,
  plugins: debug ? [myPlugin] : []
})
