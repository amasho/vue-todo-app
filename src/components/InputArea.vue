<template>
  <div class="input-area">
    <button @click="removeTodo">DELETE FINISHED TASKS</button>
    <p>
      input:
      <input v-model="inputValue" type="text" />
      <button @click="addTodo">ADD TASK</button>
    </p>
    <p>task:{{ inputValue }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'InputArea',
  computed: {
    todos () {
      return this.$store.state.todos
    },
    ...mapState(['todos', 'newTodo']),
    inputValue: {
      get () {
        return this.newTodo
      },
      set (value) {
        this.input(value)
      }
    }
  },
  async mounted () {
    this.$store.dispatch('getTodos')
  },
  methods: {
    ...mapMutations(['input']),
    addTodo () {
      this.$store.dispatch('addTodo')
    },
    removeTodo () {
      this.$store.dispatch('removeTodo')
    }
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
