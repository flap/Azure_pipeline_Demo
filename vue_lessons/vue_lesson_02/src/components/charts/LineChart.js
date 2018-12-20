import { Line } from 'vue-chartjs'

// https://github.com/apertureless/vue-chartjs/tree/develop/src/examples
// https://github.com/apertureless/vue-chartjs-demo
export default {
  extends: Line,
  data () {
    return {
      datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            borderColor: '#FC2525',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'white',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            data: [40, 39, 10, 40, 39, 80, 40]
          },
          {
            label: 'Data Two',
            borderColor: '#05CBE1',
            pointBackgroundColor: 'white',
            pointBorderColor: 'white',
            borderWidth: 1,
            backgroundColor: 'rgba(0, 231, 255, 0.5)',
            data: [60, 55, 32, 10, 2, 12, 53]
          }
        ]
      },
      gradient: null,
      gradient2: null
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')

    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
    this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')

    this.datacollection.datasets[0].backgroundColor = this.gradient
    this.datacollection.datasets[1].backgroundColor = this.gradient2

    this.renderChart(this.datacollection, { responsive: true, maintainAspectRatio: false })
  }
}
