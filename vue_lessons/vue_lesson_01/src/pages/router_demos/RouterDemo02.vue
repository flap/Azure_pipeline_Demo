<template>
  <div id="router-demo02">
    <h3>Router Demo 02, Props</h3>
    <div>
      <label for="inputname">Input Name:</label>
      <input id="inputname" type="text" v-model.lazy="inputName"><br>
      <label for="inputnext">Input Next:</label>
      <input id="inputnext" type="text" v-model.lazy="inputNext">
    </div>
    <div>
      <ul>
        <li><router-link to="/props/args">Hello World</router-link></li>
        <li><a @click="goHelloName" v-bind:title="message">Hello Name</a></li>
        <li><a @click="goNextYears" v-bind:title="message">Next Years</a></li>
        <li><router-link to="/props/search?key=vue">Query Test</router-link></li>
      </ul>
    </div>
    <div>
      <!-- component: Hello -->
      <router-view/>
    </div>
    <div>
      <a v-on:click="goRouterHome">Router Home</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputName: 'null',
      inputNext: 0,
      message: 'Click me'
    }
  },
  methods: {
    goHelloName () {
      // as <router-link to="xxx">, navigate and add a history
      this.$router.push('/props/args/' + this.inputName)
    },
    goNextYears () {
      this.$router.push('/props/custom/' + this.inputNext)
    },
    goRouterHome () {
      this.$router.push({ name: 'user_home' })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
