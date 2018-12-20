<template>
  <div>
    <p><b>Router View Content:</b></p>
    <p v-show="name !== 'null'">Hello {{ helloName }}</p>
    <p v-show="year !== 0">Next Year: {{ year }}</p>
    <p v-show="query !== null">Query: {{ JSON.stringify(query) }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    name: {
      type: String,
      default: 'null'
    },
    year: {
      type: Number,
      default: 0
    },
    query: {
      type: Object,
      default: null
    }
  },
  computed: {
    helloName () {
      return _.upperFirst(this.name) + '!'
    }
  }
}
</script>
