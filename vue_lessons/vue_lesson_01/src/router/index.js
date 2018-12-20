import Vue from 'vue'
import Router from 'vue-router'

import App from '@/pages/App'
import HelloWorld from '@/pages/HelloWorld'
import VueDemo from '@/pages/VueDemo'

import RouterIndex from '@/pages/router_demos/RouterIndex'
import RouterDemo01 from '@/pages/router_demos/RouterDemo01'
import RouterDemo02 from '@/pages/router_demos/RouterDemo02'

import Hello from '@/components/props/Hello'

Vue.use(Router)

// template, user info
const Foo = { template: '<span>User Name: foo</span>' }
const Bar = { template: '<span>User Name: bar</span>' }
const User = { template: '<span>User ID: {{ $route.params.userid }}</span>' }

const Default = { template: '<p>Details: none</p>' }
const Details = { template: '<p>Details: {{ $route.params.id }}, {{ $route.path }}, {{ $route.name }}</p>' }

// template, user settings info
const UserSettingsNav = {
  template: `
<div class="us__nav">
  <router-link to="/user/settings/emails">Emails</router-link>
  <br>
  <router-link to="/user/settings/profile">Profile</router-link>
</div>
`
}

const UserSettings = {
  template: `
<div class="us">
  <p>User Settings</p>
  <user-settings-nav/>
  <router-view/>
  <router-view name="helper"/>
</div>
  `,
  components: { UserSettingsNav }
}

const UserEmails = {
  template: `
<div>
  <p>Email Subscriptions</p>
</div>
  `
}

const UserProfile = {
  template: `
<div>
  <p>Edit your profile</p>
</div>
  `
}

const UserProfilePreview = {
  template: `
<div>
  <p>Preview of your profile</p>
</div>
  `
}

// template, 404
const NotFound = {
  template: `<h1 style='color:red;text-align:center'>Page Not Found!</h1>`
}

function propsFnGetNextYears (route) {
  const now = new Date()
  return {
    year: now.getFullYear() + parseInt(route.params.num)
  }
}

export default new Router({
  routes: [
    // #1. main pages
    {
      path: '/',
      name: 'home',
      component: App
    },
    // redirect pages
    { path: '/home', redirect: '/' },
    { path: '/index', redirect: { name: 'home' } },
    // hello wrold
    { path: '/hello', component: HelloWorld },
    { path: '/mydemo', component: VueDemo },

    // #2.1 example: user info
    // "children" map to "<router-view/>"
    {
      path: '/users',
      name: 'user_home',
      component: RouterIndex, // page
      alias: '/user', // match to "/users"
      children: [
        { path: 'foo', component: Foo },
        { path: 'bar', component: Bar },
        {
          path: 'settings',
          component: UserSettings,
          children: [
            { path: 'emails', component: UserEmails },
            {
              path: 'profile',
              components: { // 2 components here
                default: UserProfile,
                helper: UserProfilePreview
              }
            }
          ]
        },
        { path: 'list/:userid', component: User }
      ]
    },
    // #2.2 example: router
    {
      path: '/router/:id',
      component: RouterDemo01, // page
      children: [
        { path: '', component: Default },
        { path: 'details', component: Details }
      ]
    },
    // #2.3 example: router props
    {
      path: '/props',
      component: RouterDemo02, // page
      children: [
        { path: 'args', component: Hello, props: { name: 'world' } }, // pass object
        { path: 'args/:name', component: Hello, props: true }, // pass ":name" to props
        { path: 'custom/:num', component: Hello, props: propsFnGetNextYears }, // custom func
        { path: 'search', component: Hello, props: (route) => ({ query: route.query }) }
      ]
    },

    // #3. 404 - page not found
    {
      path: '*',
      component: NotFound,
      meta: {
        title: '404 not found'
      }
    }
  ]
})
