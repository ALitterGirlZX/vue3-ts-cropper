<template>
  <div class="ele-header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo menu"
      mode="horizontal"
      text-color="#000"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <img class="ele-img" src="../assets/logo.png" />
      <div class="search">
        <el-input
          v-model="input"
          placeholder="查找素材，多个用空格隔开"
          class="input"
        >
          <template #prepend>
            <el-select v-model="value" placeholder="全部" style="width: 75px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
          <template #append>
            <el-button :icon="Search" @click="search" />
          </template>
        </el-input>
      </div>
      <el-menu-item index="2" style="margin-left: 55%">登录</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { Search, Star } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";

const activeIndex = ref<string>("1");

const input = ref<string>("");

const value = ref<string>("0");

const options = ref<Array<any>>([
  {
    value: "0",
    label: "全部",
  },
  {
    value: "1",
    label: "类别",
  },
]);

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

// 下载
const search = () => {
  ElMessage({
    message: "搜索成功！",
    type: "success",
  });
};
</script>

