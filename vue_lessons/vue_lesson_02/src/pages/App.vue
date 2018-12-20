<template>
  <div id="app1">
    <img src="@/assets/logo.png">
    <hello-world></hello-world>
    <h1>Link List</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/app1">App1 vue lessons</router-link><br>
        </li>
        <li>
          <router-link to="/app2">App2 vuex lessons</router-link><br>
        </li>
        <li>
          <router-link to="/app3">App3 iframe</router-link>
        </li>
        <li>
          <router-link to="/app4">App4 charts</router-link>
        </li>
        <li>
          <router-link to="/app5">App5 reactive charts</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App1',
  components: {
    HelloWorld
  }
}
</script>

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
</style>
