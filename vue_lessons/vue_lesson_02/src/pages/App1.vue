<template>
  <div id="app1">
    <h1>Vue Lessons</h1>
    <nav>
      <router-link to="/app1/10?key=value&amp;k=v">router args test</router-link>
      <br>
      <router-link to="/app1/1">lesson-01,</router-link>
      <router-link to="/app1/2">lesson-02,</router-link>
      <router-link to="/app1/3">lesson-03,</router-link>
      <router-link to="/app1/4">lesson-04</router-link>
      <br>
      <router-link to="/app1/5">lesson-05,</router-link>
      <router-link to="/app1/6">lesson-06,</router-link>
      <router-link to="/app1/7">lesson-07,</router-link>
      <router-link to="/app1/8">lesson-08</router-link>
      <br>
      <router-link to="/">Home</router-link>
    </nav>
    <div id="test" v-if="routerQuerys() !== 'null'">
      <p>router params: {{ routerParams() }}</p>
      <p>router query: {{ routerQuerys() }}</p>
    </div>
    <div>
      <lesson-01 v-if="isSegmentShow() === '1'"></lesson-01>
      <lesson-02 v-if="isSegmentShow() === '2'"></lesson-02>
      <lesson-03 v-if="isSegmentShow() === '3'"></lesson-03>
      <lesson-04 v-if="isSegmentShow() === '4'"></lesson-04>
      <lesson-05 v-if="isSegmentShow() === '5'"></lesson-05>
      <lesson-06 v-if="isSegmentShow() === '6'"></lesson-06>
      <lesson-07 v-if="isSegmentShow() === '7'"></lesson-07>
      <lesson-08 v-if="isSegmentShow() === '8'"></lesson-08>
    </div>
    <div id="trailer">
      <button v-on:click="navTop">Go Top</button>
    </div>
  </div>
</template>

<script>
import Lesson01 from '@/components/lessons/Lesson01'
import Lesson02 from '@/components/lessons/Lesson02'
import Lesson03 from '@/components/lessons/Lesson03'
import Lesson04 from '@/components/lessons/Lesson04'
import Lesson05 from '@/components/lessons/Lesson05'
import Lesson06 from '@/components/lessons/Lesson06'
import Lesson07 from '@/components/lessons/Lesson07'
import Lesson08 from '@/components/lessons/Lesson08'

export default {
  name: 'App1',
  components: {
    Lesson01,
    Lesson02,
    Lesson03,
    Lesson04,
    Lesson05,
    Lesson06,
    Lesson07,
    Lesson08
  },
  methods: {
    routerParams: function () {
      var p = this.$route.params
      if (JSON.stringify(p) === '{}') {
        return 'null'
      }
      return p
    },
    routerQuerys: function () {
      var q = this.$route.query
      if (JSON.stringify(q) === '{}') {
        return 'null'
      }
      return q
    },
    isSegmentShow: function () {
      return this.$route.params.lessonId
    },
    navTop: function () {
      this.goTop(this.$)
    }
  }
}
</script>

<style scoped>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
