<template>
  <div>
    <Todo v-for="todo in completedTodos"
   :key="todo.id"
   :todo="todo"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Todo from './Todo.vue';
export default {
  components:{Todo},
  computed:{
  ...mapGetters('todo',['completedTodos'])
  }
}
</script>