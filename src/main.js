import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './normalize.css'
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAh-cvnsYbIP4Oor2qj5g7FlxpJr83qWL8",
  authDomain: "taichungmetro-github.firebaseapp.com",
  projectId: "taichungmetro-github",
  storageBucket: "taichungmetro-github.appspot.com",
  messagingSenderId: "571532253123",
  appId: "1:571532253123:web:57b30736f2c5d13e180f76"
};

  firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
