import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css'; // 导入 vant 的样式



const app = createApp(App)
app.use(router) // 使用 Vue Router
app.use(ElementPlus) // 使用 Element Plus 组件库
app.mount('#app') // 挂载 Vue 应用
app.use(Swipe);
app.use(SwipeItem);