import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vueApp',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/app-vue',
  },
]);
// 启动 qiankun
start();
