<template>
  <div id="lesson-07">
    <h1>Lesson 07, two way bind for elements</h1>
    <div id="example-dom">
      <p>set font color for DOM object</p>
      <button v-on:click="setFontColor">set color</button>
    </div>
    <div id="example-01" v-show="seen1">
      <h3>Example 01, two-way bind, input</h3>
      <input type="text" v-model="message1" placeholder="hello world">
      <p>Message: {{ message1 }}</p>
      <input type="text" v-model.lazy="message2" placeholder="Modifiers .lazy test">
      <p>Message: {{ message2 }}</p>
      <input type="text" v-model.trim="message3" placeholder="Modifiers .trim test">
      <p>Message: {{ message3 }}</p>
    </div>
    <div id="example-02" v-show="seen2">
      <h3>Example 02, two-way bind, textarea</h3>
      <textarea v-model="message4" placeholder="hello add multiple lines"></textarea><br>
      <span>Multiline message is:</span>
      <p style="white-space: pre-line;">{{ message4 }}</p>
    </div>
    <div id="example-03" v-show="seen3">
      <h3>Example 03, two-way bind, checkbox</h3>
      <input type="checkbox" id="cbox" v-model="checked">
      <label for="cbox">{{ checked }}</label>
    </div>
    <div id="example-04" v-show="seen4">
      <h3>Example 04, two-way bind, multi checkboxes</h3>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <div id="example-05" v-show="seen5">
      <h3>Example-05, two-way bind, radio</h3>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label><br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label><br>
      <span>Picked: {{ picked }}</span>
    </div>
    <div id="example-06" v-show="seen6">
      <h3>Example-06, two-way bind, select</h3>
      <select v-model="selected">
        <option disabled value="null">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
      </select><br>
      <span>Selected: {{ selected }}</span>
    </div>
    <div id="example-07" v-show="seen7">
      <h3>Example-07, two-way bind, multi select</h3>
      <select v-model="selectedItems" multiple>
        <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
          {{ option.text }}
        </option>
      </select><br>
      <span>Selected: {{ selectedItems }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lesson07',
  data () {
    return {
      count: 0,
      seen1: true,
      message1: '',
      message2: '',
      message3: '',
      seen2: true,
      message4: '',
      seen3: true,
      checked: false,
      seen4: true,
      checkedNames: ['Mike'],
      seen5: true,
      picked: 'One',
      seen6: true,
      selected: 'null',
      seen7: true,
      selectedItems: [],
      options: [
        {text: 'One', value: 'A'},
        {text: 'Two', value: 'B'},
        {text: 'Three', value: 'C'},
        {text: 'Four', value: 'D'}
      ]
    }
  },
  methods: {
    setFontColor: function () {
      this.count++
      var ele = document.querySelector('#example-dom')
      if (this.count % 2 === 0) {
        ele.style.color = 'green'
      } else {
        ele.style.color = 'red'
      }
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
