<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyDxGsTBkjCATx_aXtcTfB98lIX7zqjsOw4",
  authDomain: "algorithm-e6d7b.firebaseapp.com",
  databaseURL: "https://algorithm-e6d7b.firebaseio.com",
  projectId: "algorithm-e6d7b",
  storageBucket: "",
  messagingSenderId: "585219271605"
};

let app = firebase.initializeApp(config);
let db = app.database()

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
