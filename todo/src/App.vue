<template>
  <div id="app" class="container">
  <h1 class="text-center">투두리스트</h1>
  <CompletedTodo />
 <AddTodo/><br>
 <SearchTodo />
    <hr>
    <h2>할 일 리스트</h2>
  <TodoList/>
  <h2>완료한 리스트</h2>
  <CompletedTodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import AddTodo from './components/AddTodo.vue';
import CompletedTodo from './components/CompletedTodo.vue';
import SearchTodo from './components/SearchTodo.vue';
import CompletedTodoList from './components/CompletedTodoList.vue';
export default {
  components: { TodoList,CompletedTodoList, AddTodo, CompletedTodo, SearchTodo },

}
</script>

<style>

</style>
