<template>
  <div id="counter03">
    <h3>Lessons 03, Vuex Components by Map</h3>
    <div>
      <p><b>Count</b>: {{ count }}</p>
      <p>Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.</p>
      <button v-on:click="increment">+1</button>
      <button v-on:click="decrement">-1</button><br>
      <button @click="incrementIfOdd">+1 if odd</button><br>
    </div>
    <div>
      <p>Recent History (last 5 entries): {{ recentHistory }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Counter03',
  // vuex getters
  computed: mapGetters([
    'count',
    'evenOrOdd',
    'recentHistory'
  ]),
  // vuex actions
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd'
  ])
}
</script>
