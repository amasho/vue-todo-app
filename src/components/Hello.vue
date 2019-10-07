<template>
  <div>
    <h1>{{ msg }}</h1>
    <InputArea />
    <ToggleArea />
    <TaskList />
  </div>
</template>

<script>
import InputArea from '@/components/InputArea.vue'
import TaskList from '@/components/TaskList.vue'
import ToggleArea from '@/components/ToggleArea.vue'

export default {
  name: 'Hello',
  components: {
    InputArea,
    TaskList,
    ToggleArea
  },
  data: function () {
    return {
      msg: 'Vue + Vuex Todo App'
    }
  }
}
</script>
