import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './normalize.css'
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDQa8NEy2Ws1rphDXWgBh7Da3t4czHazIw",
    authDomain: "tmrt-database.firebaseapp.com",
    databaseURL: "https://tmrt-database-default-rtdb.firebaseio.com",
    projectId: "tmrt-database",
    storageBucket: "tmrt-database.appspot.com",
    messagingSenderId: "1084265006206",
    appId: "1:1084265006206:web:267dfce5e13361ef13042f",
    measurementId: "G-QMT5JVX8YT"
  };

  firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
