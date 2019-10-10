import api from '@/api'

const moduleTodo = {
  namespaced: true,
  state: {
    todos: api.read(),
    newTodo: '',
    showTodo: 'all'
  },
  mutations: {
    input: function (state, child) {
      state.newTodo = child
    },
    addTodo: function (state) {
      let text = state.newTodo && state.newTodo.trim()
      if (!text) {
        return
      }
      const id = state.todos.slice(-1)[0].id + 1
      const data = {
        id: id,
        text: text,
        done: false
      }
      state.todos.push(data)
      api.add(data)
      state.newTodo = ''
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
  actions: {}
}
export default moduleTodo
