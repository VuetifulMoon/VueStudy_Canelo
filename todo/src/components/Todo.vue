<template>
  <div class="mb-2 d-flex">
    <div>
      <input type="checkbox" :checked="todo.checked" @change="toggleCheckBox" />
    </div>
    <div v-if="editState === true">
      <input type="text" v-model="editText" @keyup.enter="editTodo" /><br />
      <button @click="editTodo">수정</button>
      <button @click="todoEdit">취소</button>
    </div>
    <div
      v-else
      class="ml-3 flex-grow-1"
      :class="todo.checked ? 'text-muted' : ''"
      :style="todo.checked ? 'text-decoration:line-through' : ''"
    >
      <span>{{ todo.text }}</span>
      <button class="btn btn-danger btn-sm" @click="todoEdit">수정</button>
      <input
        type="checkbox"
        class="btn btn-danger btn-sm"
        :checked="todo.deleted"
        @change="selectDelete"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editState: false,
      editText: "",
    };
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleCheckBox(e) {
      this.$store.dispatch("todo/toggleTodo", {
        id: this.todo.id,
        checked: e.target.checked,
      });
    },
    selectDelete(e) {
      this.$store.commit("todo/DELETE_TODOS", {
        id: this.todo.id,
        deleted: e.target.checked,
      });
    },
    //수정창 생성
    todoEdit() {
      this.editState = !this.editState;
      this.editText = this.$store.state.todo.todos.text;
    },
    //변경된 내용으로 수정
    editTodo() {
      this.$store.dispatch("todo/editTodo", {
        text: this.editText,
        id: this.todo.id,
      });
      this.editState = !this.editState;
    },
  },
};
</script>
<style>
</style>