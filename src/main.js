import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from "vue2-google-maps" // Import package
import Vue from 'vue';
import VueHtmlToPaper from 'vue-html-to-paper';
import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from '@oruga-ui/theme-bulma'
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
import '@oruga-ui/theme-bulma/dist/bulma.css'

createApp(App).use(store).use(router).use(Oruga, bulmaConfig).mount('#app')


Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "GOOGLE MAP API KEY GOES HERE",
    libraries: "places"
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ],
  timeout: 1000, // default timeout before the print window appears
  autoClose: true, // if false, the window will not close after printing
  windowTitle: window.document.title, // override the window title
}

Vue.use(VueHtmlToPaper, options);

// or, using the defaults with no stylesheet
Vue.use(VueHtmlToPaper);