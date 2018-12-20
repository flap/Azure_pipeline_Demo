<template>
  <div id="lesson08">
    <h1>Lesson 08, components and props</h1>
    <div id="example 01" v-show="seen1">
      <h4>Example 01, Component, Passing Data with Props</h4>
      <child01 message="hello, from parent."></child01>
    </div>
    <!-- TODO: CH10, props -->
  </div>
</template>

<script>
import child01 from './child01'

export default {
  name: 'Lesson08',
  data () {
    return {
      seen1: true
    }
  },
  components: {
    child01
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
