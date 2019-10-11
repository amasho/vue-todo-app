import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [],
    newTodo: '',
    showTodo: 'all'
  },
  mutations: {
    setTodos (state, todos) {
      state.todos = todos
    },
    increment (state) {
      state.count++
      console.log(state.count)
    },
    input: function (state, child) {
      state.newTodo = child
    },
    removeTodo: function (state) {
      for (let i = state.todos.length - 1; i >= 0; i--) {
        if (state.todos[i].done) state.todos.splice(i, 1)
      }
    },
    changeShowTodo (state, e) {
      state.showTodo = e
    }
  },
  actions: {
    async getTodos (ctx) {
      const data = await api.read()
      ctx.commit('setTodos', data)
    },
    addTodo (ctx) {
      let text = this.state.newTodo && this.state.newTodo.trim()
      if (!text) {
        return
      }
      const data = {
        id: this.state.todos.slice(-1)[0].id + 1,
        text: text,
        done: false
      }
      this.state.todos.push(data)
      api.add(data)
      this.state.newTodo = ''
    }
  }
})

export default store
