const moduleTodo = {
  namespaced: true,
  state: {
    todos: [{
      id: 1,
      text: 'todo1',
      done: false
    },
    {
      id: 2,
      text: 'todo2',
      done: false
    },
    {
      id: 3,
      text: 'todo3',
      done: false
    }
    ],
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
      state.todos.push({
        id: id,
        text: text,
        done: false
      })
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
