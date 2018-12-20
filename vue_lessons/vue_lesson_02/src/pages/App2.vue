<template>
  <div id="app2">
    <h1>Vuex Lessons</h1>
    <nav>
      <router-link to="/app2/1">lesson-01,</router-link>
      <router-link to="/app2/2">lesson-02,</router-link>
      <router-link to="/app2/3">lesson-03</router-link><br>
      <router-link to="/">Home</router-link><br>
    </nav>
    <div>
      <p id="count"><b>Global Count Value: {{ count }}</b></p>
    </div>
    <div v-if="$route.params.lessonId === '1'">
      <counter-01></counter-01>
    </div>
    <div v-if="$route.params.lessonId === '2'">
      <counter-02></counter-02>
    </div>
    <div v-if="$route.params.lessonId === '3'">
      <counter-03></counter-03>
    </div>
    <div id="trailer">
    <button @click="goTop($)">Go Top</button>
    </div>
  </div>
</template>

<script>
import Counter01 from '@/components/counter/Counter01'
import Counter02 from '@/components/counter/Counter02'
import Counter03 from '@/components/counter/Counter03'

export default {
  name: 'App2',
  components: {
    Counter01,
    Counter02,
    Counter03
  },
  data () {
    return {
      seen1: true,
      seen2: false,
      seen3: false
    }
  },
  computed: {
    count () {
      if (this.$store.state.part1) {
        return this.$store.state.part1.count
      }
      return this.$store.state.count
    }
  }
}
</script>

<style scoped>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#count {
  background: black;
  color: white;
}
</style>
