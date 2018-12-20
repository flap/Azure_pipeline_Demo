<template>
  <div id="app5">
    <div>
      <!-- vue-chartjs => http://vue-chartjs.org/#/ -->
      <h1>Reactive ChartJs Lessons</h1>
      <div id="barchart" class="chart" v-if="seenReactiveBar">
        <h2>Bar Reactive Chart Test</h2>
        <bar-reactive></bar-reactive>
      </div>
      <div id="linechart" class="chart" v-if="seenReactiveLine">
        <h2>Line Reactive Chart Test</h2>
        <!-- error: use tag line-reactive-chart? -->
        <!-- TODO: get canvas context -->
        <line-reactive :chart-data="datacollection" :options="chartOptions"></line-reactive>
      </div>
      <div id="trailer">
        <button @click="fillData()">Randomize</button><br>
        <button @click="goBack()">GoBack</button>
      </div>
    </div>
  </div>
</template>

<script>
import BarReactive from '@/components/charts/BarReactiveChart'
import LineReactive from '@/components/charts/LineReactiveChart'

export default {
  name: 'App5',
  components: {
    BarReactive,
    LineReactive
  },
  data () {
    return {
      seenReactiveBar: true,
      seenReactiveLine: true,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      datacollection: null,
      gradient: null,
      gradient2: null
    }
  },
  methods: {
    fillData () {
      this.setRandomDataCollection()
      this.setCanvasGradient()
    },
    setRandomDataCollection () {
      var getRandomInt = () => {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }

      var getRandomCollection = (count) => {
        let collection = []
        for (let idx = 0; idx < count; idx++) {
          collection.push(getRandomInt())
        }
        return collection
      }

      this.datacollection = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            data: getRandomCollection(7)
          },
          {
            label: 'Data Two',
            backgroundColor: 'rgba(0, 231, 255, 0.5)',
            data: getRandomCollection(7)
          }
        ]
      }
    },
    setCanvasGradient () {
      if (!this.datacollection) {
        return
      }

      // get canvas context
      // use "document.querySelector('#linechart canvas')" instead of "this.$refs.canvas"
      var canvas = document.querySelector('#linechart canvas')
      if (!canvas) {
        return
      }
      var context = canvas.getContext('2d')
      this.gradient = context.createLinearGradient(0, 0, 0, 450)
      this.gradient2 = context.createLinearGradient(0, 0, 0, 450)

      this.gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)')
      this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
      this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')

      this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
      this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
      this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')

      this.datacollection.datasets[0].backgroundColor = this.gradient
      this.datacollection.datasets[1].backgroundColor = this.gradient2
    }
  },
  // workflow:
  // #1. vir dom created, then chart created
  // #2. chart mounted, render data, and set watch to chartData
  // #3. vir dom mounted, fill data, and set gradient
  // #4. re-fill data by button on click
  created () {
    console.info('vue hook: virtual dom created.')
  },
  mounted () {
    console.info('vue hook: virtual dom mounted.')
    this.fillData()
  }
}
</script>

<style scoped>
#app5 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.chart {
  background: #212733;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
  margin:  25px 0;
}
.chart h2 {
  margin-top: 0;
  padding: 15px 0;
  color:  rgba(255, 0,0, 0.5);
  border-bottom: 1px solid #323d54;
}
</style>
