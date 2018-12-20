<template>
  <div id="lesson-02">
    <h1>Lesson 02, value bind</h1>
    <div id="example-01" v-if="seen1">
      <h2>Example 01, freeze value</h2>
      <button v-on:click="obj.foo='baz'">Change it</button>
      <p>Text freezed: {{ obj.foo }}</p>
    </div>
    <div id="example-02" v-if="seen2">
      <h2>Example 02, bind once: v-once</h2>
      <button @click="msg=msg.split('').reverse().join('')">Change it</button><br>
      <p>Text change: {{ msg }}</p>
      <p v-once>Text bind once: {{ msg }}</p>
    </div>
    <div id="example-03" v-if="seen3">
      <h2>Example 03, show html</h2>
      <p><b>Raw text:</b><br>{{ rawHtml }}</p>
      <p><b>Tag v-html:</b><br><span v-html="rawHtml"></span></p>
    </div>
    <div id="example-04" v-if="seen4">
      <h2>Example 04, js expression</h2>
      <p>Number: {{ num + 1 }}</p>
    </div>
    <div id="example-05" v-if="seen5">
      <h2>Example 05, bind attribute</h2>
      <a v-bind:href="url">Vue Guide</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lesson02',
  data () {
    return {
      seen1: false,
      // object cannot be updated
      obj: Object.freeze({
        foo: 'bar'
      }),
      seen2: true,
      msg: 'init message',
      seen3: true,
      rawHtml: 'Using mustaches: <span style="color:red">This should be red.</span>',
      seen4: false,
      num: 8,
      seen5: true,
      url: 'https://vuejs.org/v2/guide/instance.html'
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
