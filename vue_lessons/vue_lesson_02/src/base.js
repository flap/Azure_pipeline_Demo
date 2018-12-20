// common functions
exports.install = function (Vue, options) {
  // note: do not use => function here, case incorrect "this"
  Vue.prototype.goBack = function () {
    if (window.history.length > 1) {
      this.$router.go(-1)
    }
  }

  // by jpuery
  Vue.prototype.goTop = function ($) {
    $('html,body').animate({ scrollTop: '0px' }, 300)
  }
}
