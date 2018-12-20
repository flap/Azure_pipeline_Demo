<template>
  <div id="lesson-06">
    <h1>Lesson 06, event handler</h1>
    <div id="example-01" v-show="seen1">
      <h2>Example 01: listening to event</h2>
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
    <div id="example-02" v-show="seen2">
      <h2>Example 02: method event handler</h2>
      <button v-on:click="greet">Greet</button><br>
      <button v-on:click="showWarn('Form cannot be submitted yet.', $event)">Sbumit</button>
    </div>
    <div id="example-03" v-show="seen3">
      <h2>Example 03: method in inline handler</h2>
      <button v-on:click="say('what')">Say what</button><br>
      <button v-on:click="say('hi')">Say hi</button>
    </div>
    <div id="example-04" v-show="seen4">
      <h2>Example 04: event modifiers - self</h2>
        <div v-on:click.self="say('div on.click.self')">
          Div on.click.self
          <div v-on:click="say('div on.click')">
            <button>Click me</button>
          </div>
        </div>
    </div>
    <div id="example-05" v-show="seen5">
      <h2>Example 05: event modifiers - stop</h2>
        <!-- prevent? -->
        <div v-on:click="say('parent on.click')">
          Parent on.click
          <div v-on:click.stop="say('child on.click')">
            <button>Click me</button>
          </div>
        </div>
    </div>
    <div id="example-06" v-show="seen6">
      <h2>Example 06: key modifiers</h2>
      <input type="text" v-model="inputText" placeholder="ctrl+c: clear text"
        v-on:keyup.enter="say(inputText + ' submitted')"
        v-on:keyup.ctrl.67="clearText()">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lesson06',
  data () {
    return {
      seen1: true,
      counter: 0,
      seen2: true,
      message: 'Vue.js',
      seen3: false,
      seen4: true,
      seen5: true,
      seen6: true,
      inputText: ''
    }
  },
  methods: {
    greet: function (event) {
      alert('Hello ' + this.message + '!')
      if (event) {
        alert('target tag => ' + event.target.tagName)
      }
    },
    showWarn: function (text, event) {
      if (event) {
        event.preventDefault()
      }
      alert(text)
    },
    say: function (msg) {
      alert('say: ' + msg)
    },
    clearText: function () {
      this.inputText = ''
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
