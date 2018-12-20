import { Bar } from 'vue-chartjs'

// https://github.com/apertureless/vue-chartjs/tree/develop/src/examples
// https://github.com/apertureless/vue-chartjs-demo
export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      gradient: null
    }
  },
  // vue lifecycle hooks:
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed
  mounted () {
    // canvas createLinearGradient()
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)') // show this color at 0%
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)') // show this color at 50%
    this.gradient.addColorStop(1, 'rgba(145, 67, 204, 0.46)') // show this color at 100%

    this.datacollection.datasets[0].backgroundColor = this.gradient

    this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
  }
}
