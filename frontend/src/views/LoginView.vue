<template>
  <div>
    Login View
    <form v-on:submit.prevent="userLogin">
      <input type="text" name="username" id="user" v-model="username">
      <input type="password" name="password" id="pass" v-model="password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

export default class LoginView extends Vue{
  username = ''
  password = ''
  userLogin(){
    this.$store.dispatch('userLogin', {
      username: this.username,
      password: this.password
    })
    .then(()=>{
      console.log('STORE.DISPATCH WORK!!!!!!!!')
    })
    .catch(error =>{
      console.log('STORE.DISPATCH DOES NOT WORK!!!!!!!!')
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>