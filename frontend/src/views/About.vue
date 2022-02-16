<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="post in posts" :key="post.id">
      <div style="border: 2px solid red">
      <h1>{{post.title}}</h1>
      <h2> {{post.content}} </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue } from "vue-class-component";
import axios from "axios";

export default class About extends Vue {
  posts = [];


  async created(){
      axios.get('/about')
    .then(response => {
      console.log(response.data)
      this.posts = response.data
    }).catch(error =>{
      console.log('Ошибка запроса к абаут')
      })
  }


}
</script>