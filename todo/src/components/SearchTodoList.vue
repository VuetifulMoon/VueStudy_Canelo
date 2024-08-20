<template>
  <div>
    <Todo v-for="todo in searchTodos" :key="todo.id" :todo="todo" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Todo from "./Todo.vue";
export default {
  components: { Todo },
  computed: {
    ...mapGetters("todo", ["searchTodos"]),
  },
};
</script>
<style>
</style>