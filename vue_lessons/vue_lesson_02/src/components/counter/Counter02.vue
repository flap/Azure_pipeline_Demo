<template>
  <div id="counter02">
    <h3>Lesson 02, Vuex Components by Map</h3>
    <div>
      <h4>Vuex State</h4>
      <p>{{ textLocalCount }}</p>
      <p><b>Global Count:</b> {{ count }}</p>
      <p>Total (local + global): {{ countPlusLocalState }}</p>
      <p>Recent History (last 5 entries): {{ recentHistory }}</p>
    </div>
    <div>
      <h4>Vuex Getter</h4>
      <p>Done ToDos Count: {{ doneTodosCount }}</p>
      <p>Done ToDos: {{ doneTodos.join(', ') }}</p>
      <p>Get Todo By ID: {{ getTodoById }}</p>
    </div>
    <div>
      <h4>Vuex Mutations</h4>
      <button v-on:click="add">+2</button>
      <button v-on:click="min">-1</button><br>
    </div>
    <div>
      <h4>Vuex Actions</h4>
      <button @click="addAsync">+2 Async</button><br>
      <button @click="addAsyncWithNotify">+1 Async And Notify</button><br>
      <button @click="addIfOdd">+1 Async, If Odd</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Counter02',
  data () {
    return {
      localCount: 5
    }
  },
  computed: {
    textLocalCount () {
      return 'Local Count: ' + String(this.localCount)
    },
    // get vuex components by map
    // #1, vuex state
    ...mapState({
      count: state => {
        if (state.part1) {
          return state.part1.count
        }
        return state.count
      },
      countPlusLocalState (state) {
        if (state.part1) {
          return state.part1.count + this.localCount
        }
        return state.count + this.localCount
      }
    }),
    // #2, vuex getters
    ...mapGetters([
      'doneTodos',
      'doneTodosCount',
      'recentHistory'
    ]),
    getTodoById () {
      return this.$store.getters.getTodoById(2)
    }
  },
  methods: {
    // #3, vuex mutations
    ...mapMutations({
      min: 'decrement'
    }),
    add () {
      this.$store.commit('increment', { amount: 2 })
    },
    // #4, vuex actions
    addAsync () {
      this.$store.dispatch('incrementAsync', { amount: 2 })
    },
    ...mapActions({
      addIfOdd: 'incrementIfOdd',
      addAsyncAndRet: 'incrementAsyncAndRet'
    }),
    addAsyncWithNotify () {
      this.addAsyncAndRet().then(text => alert(text))
    }
  }
}
</script>
