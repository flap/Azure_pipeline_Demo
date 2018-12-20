import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

// use "reactiveProp" alone with "chartData", it watchs the changes of props=>chartData
export default {
  extends: Line,
  name: 'line2',
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  created () {
    console.info('vue hook: line reactive chart created.')
  },
  mounted () {
    console.info('vue hook: line reactive chart mounted.')
    // chartData and options are in "props" from page (App5.vue)
    this.renderChart(this.chartData, this.options)
  },
  updated () {
    console.log('vue hook: line reactive chart mounted.')
  }
}
