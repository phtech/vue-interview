<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :incomingMsg="msg" @onMessageChange="updateMessage"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    updateMessage(message){
      this.msg = message;
    }
  }
}
</script>
