<template>
    <!-- 登录页面容器，使用 flex 布局使其垂直居中 -->
    <div class="login-container">
      <el-card class="login-card">
        <h2 class="title">用户登录</h2>
        <!-- 登录表单 -->
        <el-form :model="form" label-width="80px">
          <!-- 用户名输入框 -->
          <el-form-item label="用户名">
            <el-input v-model="form.username" placeholder="请输入用户名" />
          </el-form-item>
          <!-- 密码输入框 -->
          <el-form-item label="密码">
            <el-input v-model="form.password" type="password" placeholder="请输入密码" />
          </el-form-item>
          <!-- 登录按钮 -->
          <el-form-item>
            <el-button type="primary" @click="handleLogin" class="login-button">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter(); // 获取 Vue Router 实例
  
  // 定义表单数据
  const form = ref({
    username: '',
    password: ''
  });
  
  // 处理登录逻辑
  const handleLogin = () => {
    // 检查用户名和密码是否为空
    if (!form.value.username || !form.value.password) {
      alert('请输入用户名和密码');
      return;
    }
  
    // 打印登录信息（可以替换为实际的验证逻辑）
    console.log('登录信息:', form.value);
  
    // 如果用户名和密码不为空，登录成功后跳转到主页
    router.push('/home');
  };
  </script>
  
  <style scoped>
  /* 页面整体居中 */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  /* 登录卡片样式 */
  .login-card {
    width: 350px;
    padding: 20px;
    text-align: center;
  }
  
  /* 标题样式 */
  .title {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: bold;
  }
  
  /* 登录按钮样式，使其宽度适应整个表单 */
  .login-button {
    width: 100%;
  }
  </style>
  