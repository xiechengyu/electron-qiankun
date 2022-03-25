<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="load">打开微应用</button>
  <button @click="loadH5">打开h5</button>
  <button @click="loadH5help">打开h5帮助</button>
  <button @click="back">后退</button>
  <button @click="forward">前进</button>
  <div id="container"></div>
  <div id="live-h5"></div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import actions from "./actions.js";
export default {
  name: "App",
  components: {
    // HelloWorld
  },
  mounted() {
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("主应用观察者：改变前的值为 ", prevState);
      console.log("主应用观察者：状态发生改变，改变后的 token 的值为 ", state);
    });
  },
  data() {
    return {
      b: [2, 2, 2],
    };
  },
  methods: {
    forward() {
      window.history.forward();
    },
    loadH5() {
      window.history.pushState(
        {
          user: { a: 2 },
        },
        "",
        "/inClass"
      );
    },
    loadH5help() {
      window.history.pushState(
        {
          user: { a: 2 },
        },
        "",
        "/inClass/help"
      );
    },
    load() {
      window.history.pushState(
        {
          user: { a: 2 },
        },
        "",
        "/app-vue"
      );
      const token = {
        a: 123,
        b: this.b,
      };
      // location.href = "/app-vue"
      actions.setGlobalState({ token, b: [33, 22] });
    },
    reset() {
      window.history.pushState(
        {
          user: { a: 2 },
        },
        "",
        "/"
      );
      this.b.push(23);
      // location.href = "/";
    },
    back() {
      window.history.back();
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
