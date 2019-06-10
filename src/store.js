import Vue from 'vue'
import Vuex from 'vuex'
import AUTHENTICATION_STORE from '@/stores/authentication.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {AUTHENTICATION_STORE}
})
