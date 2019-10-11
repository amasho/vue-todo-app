<template>
  <div class="task-list">
    <label
      v-for="todo in todoList"
      :key="todo.id"
      class="task-list__item"
      :class="{ 'task-list__item--checked': todo.done }"
    >
      <input v-model="todo.done" type="checkbox" title="done" />
      <input v-model="todo.editing" @change="todo.editing ? '' : editTodo(todo)" type="checkbox" title="edit" />
      <input v-if="todo.editing" v-model="todo.text" @keyup.enter="todo.editing = !todo.editing" />
      <span v-else>{{ todo.text }}</span>
    </label>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TaskList',

  computed: {
    ...mapState(['todos', 'showTodo']),
    todoList: function () {
      if (this.showTodo === 'done') {
        return this.todos.filter(todos => todos.done === true)
      } else if (this.showTodo === 'inProgress') {
        return this.todos.filter(todos => todos.done === false)
      } else {
        return this.todos
      }
    }
  },
  methods: {
    editTodo (todo) {
      this.$store.dispatch('editTodo', todo)
    }
  },
  created () {
    this.$store.dispatch('getTodos')
  }
}
</script>

<style lang="scss" scoped>
@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}
.task-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;
  &__item {
    width: 270px;
    text-align: left;
    $element: #{&};
    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
</style>
