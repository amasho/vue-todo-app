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
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('todo')
export default {
  name: 'InputArea',
  computed: {
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
  methods: {
    ...mapMutations(['input', 'addTodo', 'removeTodo'])
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
