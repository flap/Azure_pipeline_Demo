<template>
  <div id="app3">
    <h1>iFrame Test</h1>
    <table>
      <tr>
        <td>
          <div v-if="goBackState" v-on:click="goBack">GoBack</div>
          <div v-else>
            <ul>
              <li v-for="item in items" v-bind:key="item.name">
                <a v-bind:href="item.link" target="showHere" v-on:click="showIframe">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </td>
        <td id="td-show-iframe">
          <iframe v-show="iframeState" id="show-iframe" frameborder=0 name="showHere" scrolling="auto"></iframe>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'App3',
  data () {
    return {
      goBackState: false,
      iframeState: false,
      items: [
        {
          name: 'Baidu',
          link: 'http://www.baidu.com'
        },
        {
          name: 'Sogou',
          link: 'http://sogou.com'
        }
      ]
    }
  },
  mounted () {
    const deviceWidth = document.documentElement.clientWidth
    const deviceHeight = document.documentElement.clientHeight

    const oTd = document.getElementById('td-show-iframe')
    oTd.style.width = deviceWidth + 'px'
    oTd.style.height = deviceHeight + 'px'

    const oIframe = document.getElementById('show-iframe')
    oIframe.style.width = deviceWidth + 'px'
    oIframe.style.height = deviceHeight + 'px'
  },
  methods: {
    goBack () {
      this.goBackState = false
      this.iframeState = false
    },
    showIframe () {
      this.goBackState = true
      this.iframeState = true
    }
  }
}
</script>

<style scoped>
#app3 {
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
