import { createStore } from 'vuex'
import { createApp } from 'vue'
import rootApp from '../App.vue'
import axios from "axios";

const store = createStore({
  state: {
    accessToken: null,
    refreshToken: null,
    APIData: ''
  },
  mutations: {
    updateStorage(state, { access, refresh }){
        state.accessToken = access
        state.refreshToken = refresh
    },
  },
  actions: {
    userLogin( context, user_data ){
        return new Promise((resolve, reject) => {
          axios.post('/api/token/', {
              username: user_data.username,
              password: user_data.password,
          })
              .then( response => {
                  context.commit('updateStorage', {access: response.data.access, refresh: response.data.refresh})
              } )

        } )
    }
  },
  modules: {
  }
})
export default store
const app = createApp({ rootApp })
app.use(store)