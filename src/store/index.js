import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [],
    newTodo: '',
    showTodo: 'all'
  },
  mutations: {
    setTodos (state, todos) {
      state.todos = todos
    },
    input: function (state, child) {
      state.newTodo = child
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
    },
    removeTodo: function (ctx) {
      for (let i = this.state.todos.length - 1; i >= 0; i--) {
        if (this.state.todos[i].done) {
          api.remove(this.state.todos[i].id)
          this.state.todos.splice(i, 1)
        }
      }
    }
  }
})

export default store
