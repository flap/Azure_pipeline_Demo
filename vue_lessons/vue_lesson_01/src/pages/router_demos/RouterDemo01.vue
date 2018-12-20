<template>
  <div id="router-demo01">
    <div>
      <h3>Router Demo 01</h3>
      <p>ID: {{ routerId }}</p>
      <p>ID stat: <span>{{ statMsg }}</span></p>
      <p>Navigation: {{ navMsg }}</p>
      <router-view/>
    </div>
    <div>
      <label for="routeid">Input route ID:</label>
      <input id="routeid" type="text" v-model.lazy="routerId" v-on:keyup.enter="navByRouteId"><br>
      <button @click="navByRouteId">Submit</button>
    </div>
    <div id="trailer">
      <a v-on:click="goRouterHome">Router Home</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterDemo01',
  data () {
    return {
      statMsg: 'none',
      navMsg: 'none',
      routerId: this.$route.params.id
    }
  },
  watch: {
    // ?
    '$route' (to, from) {
      this.statMsg = 'ID is reload'
      this.navMsg = 'from ' + from.path + ' to ' + to.path
      this.routerId = this.$route.params.id
    }
  },
  methods: {
    navByRouteId () {
      if (this.$route.path.indexOf('details') < 0) {
        this.$router.push(`/router/${this.routerId}`)
      } else {
        this.$router.push(`/router/${this.routerId}/details`)
      }
    },
    goRouterHome () {
      this.$router.push({ name: 'user_home' })
    }
  },
  updated () {
    console.log('vue hook: page updated.')
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
