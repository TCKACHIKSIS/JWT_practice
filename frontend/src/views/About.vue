<template>
  <div class="about">
    <h1>This is an about321 page</h1>
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
import {mapState} from "vuex";
export default class About extends Vue {
  posts = [];
  computed = mapState(['APIData'])

  async created(){
      axios.get('/about', { headers: { Authorization: 'Bearer ${this.$store.state.accessToken}' } })
    .then(response => {

    }).catch(error =>{
      console.log(error)
      console.log('че кого')
      })
  }


}
</script>