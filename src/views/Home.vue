<template>
  <div>
    <el-menu :default-active="$route.path" mode="horizontal" class="topbar-menu" router>
      <el-space :size="2">
        <!-- 左侧导航菜单 -->
        <el-menu-item index="/home" class="menu-item">首页</el-menu-item>
        <el-menu-item index="/crop-query" class="menu-item">作物查询</el-menu-item>
        <el-menu-item index="/environment-monitoring" class="menu-item">环境监测</el-menu-item>
        <el-menu-item index="/self-cultivation" class="menu-item">自我培植</el-menu-item>
        <el-menu-item index="/community-interaction" class="menu-item">互动交流</el-menu-item>
        <el-menu-item index="/about-us" class="menu-item">关于我们</el-menu-item>
      </el-space>
      <!-- 右侧功能项 -->
      <div class="topbar-right">
        <el-space :size="4">
          <el-menu-item index="/">登录</el-menu-item>
          <el-menu-item index="/">注册</el-menu-item>
          <el-avatar src="../public/images/touxiang.jpg" />
        </el-space>
      </div>
    </el-menu>
  </div>

  <div class="header w">
    <header>
      <div class="header-content">
        <!-- 右侧模块：搜索和热词垂直排列 -->
        <div class="right-content">
          <!-- 搜索模块 -->
          <div class="search">
            <el-input v-model="searchQuery" placeholder="作物收缩" class="search-input">
              <template #append>
                <el-button class="search-button"  @click="handleSearch">搜索</el-button>
              </template>
            </el-input>
          </div>
          <!-- 热词模块 -->
          <div class="hotwords">
            <el-menu mode="horizontal" class="hotwords-menu" background-color="transparent" text-color="#333">
              <el-menu-item index="1" class="hotword-item">玉米</el-menu-item>
              <el-menu-item index="2" class="hotword-item">小麦</el-menu-item>
              <el-menu-item index="3" class="hotword-item">稻米</el-menu-item>
              <el-menu-item index="4" class="hotword-item">热带作物</el-menu-item>
              <el-menu-item index="5" class="hotword-item">温带作物</el-menu-item>
              <el-menu-item index="6" class="hotword-item">南方作物</el-menu-item>
              <el-menu-item index="7" class="hotword-item">北方作物</el-menu-item>
              <el-menu-item index="8" class="hotword-item">大豆</el-menu-item>
              <el-menu-item index="9" class="hotword-item">棉花</el-menu-item>
              <el-menu-item index="2" class="hotword-item">香蕉</el-menu-item>
              <el-menu-item index="3" class="hotword-item">橙子</el-menu-item>
              <el-menu-item index="4" class="hotword-item">樱桃</el-menu-item>
              <el-menu-item index="5" class="hotword-item">葡萄</el-menu-item>
              <el-menu-item index="6" class="hotword-item">松树</el-menu-item>
              <el-menu-item index="7" class="hotword-item">橡树</el-menu-item>
              <el-menu-item index="8" class="hotword-item">枫树</el-menu-item>
              <el-menu-item index="9" class="hotword-item">杉树</el-menu-item>
              <el-menu-item index="13" class="hotword-item">盆栽</el-menu-item>
              <el-menu-item index="14" class="hotword-item">多肉植物</el-menu-item>
              <el-menu-item index="15" class="hotword-item">观叶</el-menu-item>
            </el-menu>
          </div>
        </div>
      </div>
    </header>
  </div>

  <!-- 走马灯 -->
    <div class="main-content">
      <el-carousel :interval="4000" type="card" height="400px" @change="handleCarouselChange">
        <el-carousel-item v-for="(item, index) in carouselImages" :key="index">
          <img :src="item.src" alt="轮播图" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>
    </div>

  <!-- 图片 -->

    <!-- 两排，每排 4 张图片 -->
    <div class="container">
  <div class="image-row">
    <div class="image-item" v-for="(img, index) in images" :key="index">
      <el-image :src="img" fit="cover" class="custom-image">
        <template #error>
          <div class="image-slot">
            <el-icon><IconPicture /></el-icon>
          </div>
        </template>
      </el-image>
    </div>
  </div>
</div>


</template>
<script setup>
import { ref } from 'vue';
import { ShoppingCart } from '@element-plus/icons-vue';
import { Picture as IconPicture } from '@element-plus/icons-vue'
import { UserFilled } from '@element-plus/icons-vue';
import { ElInput, ElButton, ElMenu, ElMenuItem } from 'element-plus';
import { debounce } from 'lodash-es';


const searchQuery = ref('');
const carouselRef = ref(null);

const handleSearch = () => {
  console.log('搜索内容：', searchQuery.value);
  // 根据需求处理搜索逻辑
};

//轮播图
const carouselImages = ref([
  { src: '../public/images/carouse1-image.jpg' },
  { src: '../public/images/carouse2-image.jpg' },
  { src: '../public/images/carouse3-image.jpg' },
  { src: '../public/images/carouse4-image.jpg' },
 
]);

//图片
const images = ref([
  '../public/images/crop2-image.jpg',
  '../public/images/crop5-image.jpg',
  '../public/images/crop3-image.jpg',
  '../public/images/crop4-image.jpg',
  '../public/images/crop6-image.jpg',
  '../public/images/crop8-image.jpg',
  '../public/images/crop7-image.jpg',
  '../public/images/crop1-image.jpg',
]);
// 添加新图片

</script>


<style scoped>
/* 全局基础样式 */
body {
  min-width: 1000px;
  /* 保证页面最小宽度‌:ml-citation{ref="2" data="citationList"} */
}


/* 顶部导航条 start */
.topbar-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #5d7d5f;
}

.menu-item {
  margin: 0 5px;
  /* 左右各增加20px的外边距 */
}

.el-menu-item {
  color: #fff;
}

.el-menu-item:hover {
  background-color: #b1b5b8;
}

.topbar-right {
  display: flex;
  align-items: center;
}

.demo-type {
  display: flex;
}

.demo-type>div {
  flex: 1;
  text-align: center;
}



.el-avatar {
  margin-right: 20px;
}

/* 统一版心：限定最大宽度，居中 */
.header.w {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
}

/* 整体头部内容采用 flex 布局，左右分布 */
.header-content {
  display: flex;
  align-items: center;
}


/* 右侧模块：搜索和热词垂直排列 */
.right-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* 搜索模块 */
.search {
  width: 600px;
  margin-bottom: 5px;
  margin-left: 320px;
  color:  rgb(13, 11, 11) ;
}



.hotword-item {
  padding: 0 10px;
  /* font-size: 14px; */

}

.hotwords {
  margin-left: 70px;
}

/* 顶部导航条 end */


/* 走马灯 */
.carousel-img {
  width: 400px;
  height: 300px;
  object-fit: cover;
}

.main-content {
  flex: 1;
  padding-left: 20px;
}
.main-content img {
  width: 100%;
  height: 400px;
}
.carousel-image {
  width: 1400px;
  height: 400px;
  object-fit: cover;
  display: block;
  margin: auto;
}

/* 图片 */
/* 图片网格布局，每排最多 4 张 */
.image-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 列 */
  gap: 10px; /* 图片间距 */
  max-width: 700px; /* 调整合适的最大宽度 */
  margin: 0 auto; /* 水平居中 */
  justify-content: center; /* 居中对齐 */
}
/* 每个图片项 */
.image-item {
  width: 300px; /* 让它填满 grid */
  height: 240px;
  margin-top: 30px;
  border: 4px solid #e4f3e4;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}


/* 图片自适应容器 */
.custom-image {
  width: 300px; /* 让它填满 grid */
  height: 240px;
  object-fit: cover;
}


/* 错误时显示的占位内容 */
.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}
</style>
