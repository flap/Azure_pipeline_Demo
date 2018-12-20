<template>
  <div id="lesson-04">
    <h1>Lesson 04, set css properties</h1>
    <!-- class value related to css properties -->
    <div id="example-01" v-if="seen1">
      <h1>Example 01: class bind, object</h1>
      <div v-bind:class="classObject">fatal error text1</div>
    </div>
    <div id="example-02" v-if="seen2">
      <h1>Example 02: class bind, array</h1>
      <div v-bind:class="[isStatic ? staticClass : '', errorClass]">fatal error text2</div>
    </div>
    <div id="example-03" v-if="seen3">
      <h1>Example 03: style bind</h1>
      <div v-bind:style="styleObject">fatal error text3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lesson04',
  data () {
    return {
      seen1: true,
      isStatic: true,
      error: {
        type: 'fatal'
      },
      seen2: true,
      staticClass: 'static',
      errorClass: 'text-danger',
      seen3: true,
      styleObject: {
        color: 'green',
        fontSize: '18px'
      }
    }
  },
  computed: {
    classObject: function () {
      return {
        static: this.isStatic, // true or false
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
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
.text-danger {
  color: red;
}
.static {
  font-family: verdana;
}
</style>
