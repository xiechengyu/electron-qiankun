<template>
  <div id="app">
    微应用
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-view></router-view> -->
    <button @click="cover">遮罩</button>
    <button @click="setToken">设置token</button>
    <div v-show="isCover" @click="cover" class="cover"></div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import actions from "./actions";
export default {
  data() {
    return {
      isCover: false,
    };
  },
  name: "App",
  components: {
    // HelloWorld
  },
  mounted() {
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    actions.onGlobalStateChange((state) => {
      // const { token } = state;
      console.log("token:", state);
    }, true);
  },
  methods: {
    cover() {
      this.isCover = !this.isCover;
    },
    setToken() {
      actions.setGlobalState({ token: 9999 });
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
.cover {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
