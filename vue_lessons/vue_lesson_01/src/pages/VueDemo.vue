<template>
  <div id="vuedemo">
    <div>
      <h3>Display Msg</h3>
      <button v-on:click="myEchoMessage">Echo Message</button><br>
      <span>Message: {{ message1 }}</span>
    </div>
    <div>
      <h3>Http Get Test</h3>
      <button v-on:click="myHttpGet">Get Request</button>
      <p>Http Resp Body: {{ message2 }}</p>
    </div>
    <div>
      <h3>Browser Navigation</h3>
      <button v-on:click="goBack">Go Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueDemo',
  data () {
    return {
      message1: 'My hello world vue.js!',
      message2: 'null'
    }
  },
  methods: {
    myEchoMessage: function () {
      alert(this.message1)
    },
    myHttpGet: function () {
      // access express server declared in webpack.dev.conf.js
      this.$http.get('http://localhost:8080/api/api1')
        .then(response => {
          console.log(response.status)
          this.message2 = response.data
        })
        .catch(function (err) {
          console.error(err)
        })
    },
    goBack () {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
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
