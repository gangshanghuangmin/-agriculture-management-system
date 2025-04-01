<script setup>
import { ref } from "vue";
import { ElSelect, ElOption, ElOptionGroup } from "element-plus";

// 类目数据
const categories = ref([
  { label: "水果", options: ["桃子", "苹果", "橘子", "西瓜", "地瓜", "哈密瓜"] },
  { label: "蔬菜", options: ["白菜", "生菜", "萝卜", "黄瓜", "西红柿"] },
  { label: "树木", options: ["松树", "柏树", "樟树", "槐树"] },
  { label: "多肉", options: ["玉露", "熊童子", "白牡丹", "姬星美人"] },
  { label: "水生植物", options: ["睡莲", "荷花", "凤眼莲", "水葫芦"] },
  { label: "温带种植", options: ["苹果树", "梨树", "草莓", "葡萄"] },
  { label: "盆栽", options: ["绿萝", "吊兰", "文竹", "龟背竹"] },
]);

const activeCategory = ref(categories.value[0]);
const selectedValue = ref("");

// 监听鼠标进入，切换当前分类
const handleMouseEnter = (category) => {
  activeCategory.value = category;
};
</script>

<template>
  <div class="category-selector">
    <div class="category-list">
      <div
        v-for="category in categories"
        :key="category.label"
        class="category-item"
        @mouseenter="handleMouseEnter(category)"
      >
        {{ category.label }}
      </div>
    </div>
    <ElSelect v-model="selectedValue" placeholder="请选择" class="option-box">
      <ElOptionGroup
        :key="activeCategory.label"
        :label="activeCategory.label"
      >
        <ElOption
          v-for="option in activeCategory.options"
          :key="option"
          :label="option"
          :value="option"
        />
      </ElOptionGroup>
    </ElSelect>
  </div>
</template>


<script>
export default {
  name: 'ChoosingCrop',
};
</script>


<style scoped>
.category-selector {
  display: flex;
  gap: 20px;
}
.category-list {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  padding-right: 10px;
}
.category-item {
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.3s;
}
.category-item:hover {
  background: #f5f5f5;
}
.option-box {
  width: 200px;
}
</style>
