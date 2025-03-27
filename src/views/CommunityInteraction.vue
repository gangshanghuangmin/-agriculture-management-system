<template>
  <div class="community-container">
    <!-- 发布帖子区域 -->
    <el-card class="post-form">
      <el-input v-model="newPost.content" type="textarea" placeholder="分享你的想法..." />
      <el-upload
        class="upload-box"
        action="#"
        :auto-upload="false"
        list-type="picture-card"
        :on-change="handleImageUpload"
      >
        <el-icon><Plus /></el-icon>
      </el-upload>
      <el-button type="primary" @click="publishPost">发布</el-button>
    </el-card>

    <!-- 帖子列表 -->
    <el-card v-for="post in posts" :key="post.id" class="post-card">
      <div class="post-content">{{ post.content }}</div>
      <el-image v-if="post.image" :src="post.image" class="post-image" fit="cover" />
      <div class="comment-section">
        <el-input v-model="post.newComment" placeholder="写下你的评论..." />
        <el-button @click="addComment(post.id)">评论</el-button>
        <ul>
          <li v-for="comment in post.comments" :key="comment">{{ comment }}</li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Plus } from '@element-plus/icons-vue';

// 数据存储
const posts = ref([
  { id: 1, content: '欢迎来到社区！', image: '', comments: [] }
]);
const newPost = ref({ content: '', image: '' });

// 发布帖子
const publishPost = () => {
  if (!newPost.value.content) return;
  posts.value.unshift({
    id: Date.now(),
    content: newPost.value.content,
    image: newPost.value.image,
    comments: []
  });
  newPost.value = { content: '', image: '' };
};

// 处理图片上传
const handleImageUpload = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    newPost.value.image = e.target.result;
  };
  reader.readAsDataURL(file.raw);
};

// 添加评论
const addComment = (postId) => {
  const post = posts.value.find((p) => p.id === postId);
  if (post && post.newComment) {
    post.comments.push(post.newComment);
    post.newComment = '';
  }
};
</script>

<style scoped>
.community-container {
  width: 60%;
  margin: auto;
}
.post-form {
  margin-bottom: 20px;
  padding: 20px;
}
.post-card {
  margin-bottom: 20px;
}
.upload-box {
  margin: 10px 0;
}
.post-image {
  width: 100%;
  height: 200px;
  margin-top: 10px;
}
.comment-section {
  margin-top: 10px;
}
</style>
