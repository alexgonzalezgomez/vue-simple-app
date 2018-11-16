import Vue from 'vue'
import router from './router'

const VueHead = require('vue-head')

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueHead, {
  meta: {
    script: {
      type: 'text/javascript', src: '"https://use.fontawesome.com/releases/v5.3.1/js/all.js"', async: true
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
