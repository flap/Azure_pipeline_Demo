<template>
  <div id="counter01">
    <h3>Lesson 01, Vuex Components</h3>
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
      <h4>Vuex Mutations (Sync)</h4>
      <button v-on:click="add">+2</button>
      <button v-on:click="min">-1</button><br>
    </div>
    <div>
      <h4>Vuex Actions (Async)</h4>
      <button @click="addAsync">+2 Async</button><br>
      <button @click="addAsyncWithNotify">+1 Async And Notify</button><br>
      <button @click="addIfOdd">+1 Async If Odd</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter01',
  data () {
    return {
      localCount: 5
    }
  },
  computed: {
    textLocalCount () {
      return 'Local Count: ' + String(this.localCount)
    },
    // #1, vuex state
    count () {
      if (this.$store.state.part1) {
        return this.$store.state.part1.count
      }
      return this.$store.state.count
    },
    countPlusLocalState () {
      if (this.$store.state.part1) {
        return this.$store.state.part1.count + this.localCount
      }
      return this.$store.state.count + this.localCount
    },
    // #2, vuex getters
    doneTodos () {
      return this.$store.getters.doneTodos
    },
    doneTodosCount () {
      return this.$store.getters.doneTodosCount
    },
    getTodoById () {
      return this.$store.getters.getTodoById(2)
    },
    recentHistory () {
      return this.$store.getters.recentHistory
    }
  },
  methods: {
    // #3, vuex mutations
    add () {
      this.$store.commit('increment', { amount: 2 })
    },
    min () {
      this.$store.commit('decrement')
    },
    // #4, vuex actions
    addIfOdd () {
      this.$store.dispatch('incrementIfOdd')
    },
    addAsync () {
      this.$store.dispatch('incrementAsync', { amount: 2 })
    },
    addAsyncWithNotify () {
      this.$store.dispatch('incrementAsyncAndRet').then((text) => alert(text))
    }
  }
}
</script>
