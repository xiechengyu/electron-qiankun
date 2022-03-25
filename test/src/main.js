import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vueApp',
    entry: 'http://localhost:8081',
    container: '#container',
    activeRule: '/app-vue',
  },
  {
    name: 'kc-live-h5',
    entry: "http://localhost:8082/inClass/live#/",
    container: '#live-h5',
    activeRule: '/inClass',
  },
]);
// 启动 qiankun
start();
