<template>
  <div id="lesson-03">
    <h1>Lesson 03, computed and watch values</h1>
    <div id="example-01" v-if="seen1">
      <h2>Example 01: computed properties</h2>
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
    <div id="example-02" v-if="seen2">
      <h2>Example 02: watch vs computed</h2>
      <div id="watch-property">
        <h3>watch property</h3>
        <div>
          <label for="first-name">First name</label>
          <input id="first-name" type="text" v-model="firstName01"><br>
          <label for="last-name">Last name</label>
          <input id="last-name" type="text" v-model="lastName01">
        </div>
        <p><b>Full name:</b> {{ fullName01 }}</p>
      </div>
      <div id="computed-property">
        <h3>computed property</h3>
        <div>
          <input type="text" v-model="firstName02" placeholder="first name"><br>
          <input type="text" v-model="lastName02" placeholder="last name">
        </div>
        <p><b>Full name:</b> {{ fullName02 }}</p>
      </div>
    </div>
    <div id="example-03" v-if="seen3">
      <h2>Example 03: watch property</h2>
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
export default {
  name: 'Lesson03',
  data() {
    return {
      seen1: false,
      message: 'Hello',
      seen2: true,
      // watch
      firstName01: 'Foo',
      lastName01: 'Bar',
      fullName01: 'Foo Bar',
      // computed
      firstName02: 'Zheng',
      lastName02: 'Jin',
      seen3: true,
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    }
  },
  computed: {
    // cached value
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    fullName02: function() {
      return this.firstName02 + ' ' + this.lastName02
    }
  },
  watch: {
    firstName01: function(val, old) {
      console.log(`watch: firstname from ${old} to ${val}`)
      this.fullName01 = val + ' ' + this.lastName01
    },
    lastName01: function(val, old) {
      console.log(`watch: lastname from ${old} to ${val}`)
      this.fullName01 = this.firstName01 + ' ' + val
    },
    question: function(question, old) {
      if (question === '') {
        this.answer = 'I cannot give you an answer until you ask a question!'
        return
      }
      this.answer = 'Waiting for you to stop typing...'
      setTimeout(this.getAnswer, 2000)
    }
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      this.$http
        .get('https://yesno.wtf/api')
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer) // lodash
        })
        .catch(function(error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
}
</script>

<style scoped>
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
