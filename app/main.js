import Vue from 'nativescript-vue'
import store from './store';
import routes from './routes';
import ButtonPlugin from 'nativescript-material-button/vue';
import FloatingActionButtonPlugin from 'nativescript-material-floatingactionbutton/vue';
import TextFieldPlugin from 'nativescript-material-textfield/vue';

Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);
Vue.registerElement('Ripple', () => require('nativescript-ripple').Ripple);

Vue.use(ButtonPlugin);
Vue.use(FloatingActionButtonPlugin);
Vue.use(TextFieldPlugin);

new Vue({
  store,
  render: h => h('frame', [h(routes.splash)])
}).$start();
