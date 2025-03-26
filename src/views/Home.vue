<template>
  <div class="home-container">
    <!-- 顶部导航栏 -->
    <div class="top-bar">
      <div class="user-actions">
        <el-button type="text" @click="handleLogin">登录</el-button>
        <el-button type="text" @click="handleRegister">注册</el-button>
        <el-avatar :src="userAvatar" class="user-avatar"></el-avatar>
      </div>
    </div>

    <div class="main-layout">
      <!-- 左侧导航栏 -->
      <el-menu default-active="/crops" class="side-menu" @select="handleMenuSelect">
        <el-menu-item index="/crops">播种管理</el-menu-item>
        <el-menu-item index="/weather">天气检测</el-menu-item>
        <el-menu-item index="/reminders">施肥管理</el-menu-item>
        <el-menu-item index="/community">博客交流</el-menu-item>
      </el-menu>
      
      <!-- 主要内容区 -->
      <div class="main-content">
        <!-- 大轮播图 -->
        <div class="block text-center">
          <el-carousel height="400px" indicator-position="outside">
            <el-carousel-item v-for="(item, index) in carouselImages" :key="index">
              <img :src="item.src" alt="轮播图" class="carousel-image" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const userAvatar = ref('https://via.placeholder.com/50');

const carouselImages = ref([
  { src: '../public/images/carouse1-image.jpg' },
  { src: '../public/images/carouse2-image.jpg' },
  { src: '../public/images/carouse3-image.jpg' },
  { src: '../public/images/carouse4-image.jpg' }
]);

// 登录按钮点击事件，跳转到登录页面
const handleLogin = () => {
  router.push('../views/Login.vue'); // 跳转到 /login 路径
};

// 注册按钮点击事件，跳转到注册页面（可以添加注册页面的逻辑）
const handleRegister = () => {
  console.log('../views/Login.vue');
  // 注册页面跳转逻辑
};

// 左侧导航栏菜单选择事件，跳转到相应的页面
const handleMenuSelect = (index) => {
  router.push(index);
};


</script>

<style scoped>
.home-container {
  padding: 20px;
}

.top-bar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.user-actions {
  display: flex;
  align-items: center;
}

.user-avatar {
  margin-left: 10px;
  width: 100px;
  height: 100px;
}

.main-layout {
  display: flex;
}

.side-menu {
  width: 200px;
}

.main-content {
  flex: 1;
  padding-left: 20px;
}

.carousel-image {
  width: 1400px;
  height: 400px;
  object-fit: cover;
  display: block;
  margin: auto;
}
</style>