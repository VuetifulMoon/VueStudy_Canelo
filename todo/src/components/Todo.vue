<template>
  <div class="mb-2 d-flex">
    <div>
      <input type="checkbox" :checked="todo.checked" @change="toogleCheckBox">
    </div>
    <div v-if="editState === true">
    <input type="text"
    v-model="text" @keyup.enter="editTodo" ><br>
    <button @click="editTodo">수정</button>
    <button @click="todoEdit">취소</button>
  </div>
  <div v-else  class="ml-3 flex-grow-1"
    :class="todo.checked ? 'text-muted' :'' "
    :style="todo.checked ? 'text-decoration:line-through' : '' " >
    <span 
     >{{ todo.text }}</span>
    <button class="btn btn-danger btn-sm" @click="todoEdit">수정</button>
    <button class="btn btn-danger btn-sm" @click="clickDelete">삭제</button>
  </div>
    {{ numberOfCompletedTodo }}
  </div>
</template>
<script>
export default{
  data(){
    return{
  editState: false,
  text: this.$store.state.todo.text
    }
  },
props:{
  todo:{
    type:Object,
    required:true
  },
},
computed:{
  numberOfCompletedTodo(){
      return this.$store.getters['todo/numberOfCompletedTodo'];
    }
},
methods:{
  toogleCheckBox(e){
    this.$store.dispatch('todo/toggleTodo',{
      id:this.todo.id,
      checked:e.target.checked
    })
  },
  clickDelete(){
    this.$store.dispatch('todo/deleteTodo',this.todo.id);
  },
  //수정창 생성
  todoEdit(){
    this.editState = !this.editState
    this.$store.state.todo;
  },
  //변경된 내용으로 수정
  editTodo(){
    this.$store.dispatch('todo/eidtTodo',{text : this.text ,id : this.todo.id})
    this.editState = !this.editState
  }
}
}
</script>
<style>
</style>