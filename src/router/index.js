// 引入 Vue Router 的相关函数
import { createRouter, createWebHistory } from 'vue-router'
// 引入需要用到的页面组件
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Crops from '../views/Crops.vue'       // 播种管理页面
import Weather from '../views/Weather.vue'   // 天气检测页面
import Reminders from '../views/Reminders.vue' // 施肥管理页面
import Community from '../views/Community.vue' // 博客交流页面

// 定义路由数组，包含了页面的路径与对应组件
const routes = [
  // 路径为 '/' 时，加载 Login 组件（登录页面）
  { path: '/', component: Login },
  // 路径为 '/home' 时，加载 Home 组件（主页）
  { path: '/home', component: Home },
  { path: '/crops', component: Crops },  // 播种管理页
  { path: '/weather', component: Weather },  // 天气检测页
  { path: '/reminders', component: Reminders }, // 施肥管理页
  { path: '/community', component: Community }, // 博客交流页
]

// 创建 Vue Router 实例
const router = createRouter({
  // 使用 HTML5 的 history 模式进行路由跳转，去掉 URL 中的 '#' 号
  history: createWebHistory(),
  // 配置路由数组，告诉 Vue Router 如何匹配路径和组件
  routes,
})
// 导出 router 实例，供 Vue 应用使用
export default router
