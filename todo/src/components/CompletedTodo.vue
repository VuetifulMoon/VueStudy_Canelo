<template>
  <div>
    완료한 투두리스트 : {{ numberOfCompletedTodo }}
  </div>
</template>
<script>
export default{
  computed :{
    // todos(){
    //   return this.$Store.state.todos
    // },
    numberOfCompletedTodo(){
      return this.$store.getters["todo/numberOfCompletedTodo"]
    }
  }
}
</script>