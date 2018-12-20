# vue_lessons

> vue lessons from github

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Guide

**Workflow**

```
index.html, <div id="app">, <router-view/> => @/main.js, router => @/router/index.js => @/pages/App.vue

vue lessons => @/pages/App1.vue => @/components/lessons/*
```

Vuex

```
vuex lessons 
vue => @/pages/App2.vue => @/components/counter/*
vuex => @/main.js => @/vuex/store.js
vuex => @/main.js => @/store/index.js => getters.js, mutations.js, action.js
vuex => @/main.js => @/vuex/index.js => @/vuex/modules/*
```

ChartJs

```
charts => @/pages/App4.vue => @/components/charts/*

1) bar-reactive-chart
BarReactiveChart.js => chart created, init chartData => chart mounted, set gradient, and render chartData => mixins, reactiveData => watch "chartData" updates

2) line-reactive-chart
App5.vue => page created
LineReactiveChart.js => chart created => chart mounted, render chartData => mixins, reactiveProp => watch props "chartData" updates
App5.vue => page mounted, fill dataCollection, and set gradient => on button click, re-fill dataCollection
```

