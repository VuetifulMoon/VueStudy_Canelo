<template>
  <input type="text" class="w-100 p-2 mt-2"  
  placeholder="Search Todo!"
  v-model="keyword" @input="searchTodo"/>
</template>
<script>
export default {
  data(){
    return{
      keyword:''
    }
  },
  methods:{
    searchTodo(e){
      this.$store.dispatch('todo/searchTodo',e.target.value)
    }
  }
  
}
</script>