import Vue from 'vue'
import Vuex from 'vuex'
import moduleTodo from '@/components/moduleTodo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todo: moduleTodo
  }
})
