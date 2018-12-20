<template>
  <div id="router-index">
    <h1>Router Demos</h1>
    <nav>
      <h3>Router Test</h3>
      <ul>
        <li><router-link to="/router/01">Router (01)</router-link></li>
        <li><router-link to="/router/01/details">Router Info (01)</router-link></li>
      </ul>
      <h3>User Test</h3>
      <ul>
        <li><router-link to="/users/foo">User Foo</router-link></li>
        <li><router-link to="/users/bar">User Bar</router-link></li>
      </ul>
      <ul>
        <li><router-link to="/users/list/001">Userid 001</router-link></li>
        <li><router-link to="/users/list/002">Userid 002</router-link></li>
      </ul>
      <ul>
        <li><router-link to="/users/settings">User Settings</router-link></li>
      </ul>
      <h3>Props Test</h3>
      <ul>
        <li><router-link to="/props">Props Example</router-link></li>
      </ul>
    </nav>
    <p><b>Router View Content:</b></p>
    <!-- router view template from @/router/index.js -->
    <router-view/>
    <p id="trailer">
      <a v-on:click="goBack">Go Back</a><br>
      <a v-on:click="goHome">Go Home</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'RouterIndex',
  methods: {
    goHome () {
      // open home page and add a record in history, as <router-link to="xxx">
      // this.$router.push('/')
      this.$router.push({ name: 'home' })
    },
    goBack () {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        this.goHome()
      }
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
