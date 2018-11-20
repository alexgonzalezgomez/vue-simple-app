import Vue from 'vue'
import router from './router'

const VueHead = require('vue-head')
Vue.use(VueHead)

import App from './App.vue'

Vue.config.productionTip = false

// add the helpers mixin
import HelpersMixin from './mixins/helpers-mixin'

Vue.mixin(HelpersMixin)

// load bulma.io css FIXME import in a css file, not a script
// import './../node_modules/bulma/css/bulma.css';

// FIXME DON'T FORGET TO REMOVE
Vue.mixin({
  methods: {
    debug(val) {
      if(val)
        console.log(val)
      debugger
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
