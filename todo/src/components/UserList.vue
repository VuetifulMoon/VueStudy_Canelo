<template>
  <div>
    <h1>사용자 목록</h1>
    <div v-for="user in people" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
created(){
   this.getUsers();
},
computed:{
  ...mapState('user',{people:
  state => state.users,
}),
  // users(){
  // return this.$store.state.users
  // }
},
methods:{
  ...mapActions('user',['getUsers'])
//  getUsers(){
//   this.$store.dispatch('getUsers')
//  }
}
}
</script>