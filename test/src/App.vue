<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="load">打开微应用</button>
  <button @click="reset">关闭微应用</button>
  <div id="container"></div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  methods: {
    load() {
      window.history.pushState(
        {
          user: { a: 2 },
        },
        "",
        "/app-vue"
      );
      // location.href = "/app-vue"
    },
    reset() {
      window.history.pushState(
        {
          user: { a: 2 },
        },
        "",
        "/"
      );
      // location.href = "/";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
