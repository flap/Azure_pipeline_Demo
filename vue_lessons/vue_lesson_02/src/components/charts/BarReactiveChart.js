import { Bar, mixins } from 'vue-chartjs'
const { reactiveData } = mixins

// use "reactiveData" alone with "chartData", it watchs the changes of data=>chartData
export default {
  extends: Bar,
  mixins: [reactiveData],
  data () {
    return {
      chartData: null,
      gradient: null
    }
  },
  methods: {
    fillData () {
      var getMonths = () => {
        var months = []
        months.push('January', 'February', 'March', 'April', 'May', 'June')
        months.push('July', 'August', 'September', 'October', 'November', 'December')
        return months
      }

      var getRandomInt = () => {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }

      this.chartData = {
        labels: getMonths(),
        datasets: [
          {
            label: 'Data One',
            backgroundColor: this.gradient,
            data: (() => {
              let nums = []
              for (let idx = 0; idx < 12; idx++) {
                nums.push(getRandomInt())
              }
              return nums
            })() // return random datasets
          }
        ]
      }
    }
  },
  created () {
    console.info('vue hook: bar reactive chart created.')
    this.fillData() // init chartData
  },
  mounted () {
    console.info('vue hook: bar reactive chart mounted.')
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)') // show this color at 0%
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)') // show this color at 50%
    this.gradient.addColorStop(1, 'rgba(145, 67, 204, 0.46)') // show this color at 100%

    this.chartData.datasets[0].backgroundColor = this.gradient

    this.renderChart(this.chartData, { responsive: true, maintainAspectRatio: false })

    // refresh chartData at interval
    setInterval(() => { this.fillData() }, 5000)
  }
}
