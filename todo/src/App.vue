<template>
  <div id="app" class="container">
    <h1 class="text-center">투두리스트</h1>
    <CompletedTodo />
    <AddTodo /><br />
    <SearchTodo />
    <hr />
    <button>전체선택/해제</button>
    <button @click="deleteTodo">삭제</button>
    <div v-if="this.$store.state.todo.searchKeywords == true">
      <h2>검색 결과</h2>
      <SearchTodoList />
    </div>
    <div v-else>
      <h2>할 일 리스트</h2>
      <TodoList />
      <h2>완료한 리스트</h2>
      <CompletedTodoList />
    </div>
  </div>
</template>

<script>
import TodoList from "./components/SearchTodoList.vue";
import AddTodo from "./components/AddTodo.vue";
import CompletedTodo from "./components/CompletedTodo.vue";
import SearchTodoList from "./components/SearchTodoList.vue";
import SearchTodo from "./components/SearchTodo.vue";
import CompletedTodoList from "./components/CompletedTodoList.vue";
// import { mapMutations } from "vuex";
export default {
  components: {
    TodoList,
    CompletedTodoList,
    AddTodo,
    CompletedTodo,
    SearchTodoList,
    SearchTodo,
  },
  // methods: {
  //   DELETE_TODO() {
  //     // const index = state.todos.findIndex((todo) => {
  //     //   return todo.id === this.deleteId;
  //     // });
  //     const filteredTodo = this.$store.state.todo.todos.map((todo) => {
  //       return todo.id !== this.$store.state.todo.deleteId;
  //     });
  //     this.$store.state.todo.todos = filteredTodo;
  //   },
  // },
  methods: {
    deleteTodo() {
      this.$store.commit("todo/DELETE_TODO");
    },
  },
};
</script>

<style>
</style>
