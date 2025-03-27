// 引入 Vue Router 的相关函数
import { createRouter, createWebHistory } from 'vue-router'
// 引入需要用到的页面组件
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import CropQuery from '../views/CropQuery.vue';
import EnvironmentMonitoring from '../views/EnvironmentMonitoring.vue';
import SelfCultivation from '../views/SelfCultivation.vue';
import CommunityInteraction from '../views/CommunityInteraction.vue';
import AboutUs from '../views/AboutUs.vue';

// 定义路由数组，包含了页面的路径与对应组件
const routes = [
  // 路径为 '/' 时，加载 Login 组件（登录页面）
  { path: '/', component: Login },
  // 路径为 '/home' 时，加载 Home 组件（主页）
  { path: '/home', component: Home },
  { path: '/crop-query', name: 'CropQuery', component: CropQuery },
  { path: '/environment-monitoring', name: 'EnvironmentMonitoring', component: EnvironmentMonitoring },
  { path: '/self-cultivation', name: 'SelfCultivation', component: SelfCultivation },
  { path: '/community-interaction', name: 'CommunityInteraction', component: CommunityInteraction },
  { path: '/about-us', name: 'AboutUs', component: AboutUs },
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
