<template>
  <div class="ele-body">
    <Header />
    <div class="body-card">
      <el-row :gutter="20">
        <el-col
          :sm="12"
          :md="8"
          :lg="6"
          :xl="4"
          v-for="(item, index) in img"
          :key="item.id"
          :value="item.id"
          @mouseover="showIcon(index)"
          @mouseout="showIcon"
        >
          <div class="grid-content">
            <div class="image-preview">
              <el-image
                style="width: 80%; height: 200px; margin-top: 20px"
                :src="item.path"
                :preview-src-list="srcList"
                :hide-on-click-modal="true"
                fit="cover"
                @click="preview(item)"
              />
            </div>
            <div class="el-img-bottom">
              <div class="bottom-left">
                <span style="color: #00aa88">{{ item.title }}</span>
                <br />
                <span>{{ item.detail }}</span>
              </div>
              <div
                :class="{ active: isActive == index, elicon: true, bottomright: true, }"
              >
                <el-icon @click="down(item)">
                  <download />
                </el-icon>
                <el-icon @click="copy(item)">
                  <star />
                </el-icon>
                <el-icon @click="edit(item)">
                  <picture-filled />
                </el-icon>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="el-page">
        <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[30, 40, 50, 60, 70, 80, 90, 100]"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="img.length"
        />
      </div>
    </div>
    <!-- 图片裁剪弹窗 -->
    <ele-cropper-modal
      title="图片裁剪弹窗"
      :src="current.path"
      accept=".jpg, .jpeg, .png, .bmp, .gif"
      v-model:visible="visible"
      @done="onCrop"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Download, Star, PictureFilled } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import eleCropperModal from "ele-admin-pro/lib/ele-cropper-modal";

import type { ImgParam } from "../json/model";

const isActive = ref<number>(-1);

const current = ref<ImgParam>({});

const visible = ref<boolean>(false);

const currentPage = ref<number>(1);

const pageSize = ref<number>(30);

const img = ref<Array<ImgParam>>([
  {
    id: 1,
    path: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F110R0112635%2F20110Q12635-8-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651369776&t=71ac7ef02148b94f4c2b3cb73800a6f8",
    title: "图片1",
    detail: "图片1的介绍",
  },
  {
    id: 2,
    path: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic59.nipic.com%2Ffile%2F20150122%2F19369522_180208919000_2.jpg&refer=http%3A%2F%2Fpic59.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651290584&t=a786cb3ab6d21d07cc46fa0def738cd8",
    title: "图片2",
    detail: "图片2的介绍",
  },
  {
    id: 3,
    path: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic15.nipic.com%2F20110814%2F5547483_010003535000_2.jpg&refer=http%3A%2F%2Fpic15.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651303354&t=b55be65e47c32a66c29c14c6f9f38436",
    title: "图片3",
    detail: "图片3的介绍",
  },
]);

const srcList = ref<Array<string>>([
  "https://img1.baidu.com/it/u=2962790589,1978812676&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
]);

// 预览
const preview = (value: ImgParam) => {
  srcList.value = [value?.path];
};

// 下载
const down = (value: ImgParam) => {
  current.value = value;
  visible.value = false;
  ElMessage({
    message: "下载成功！",
    type: "success",
  });
};

// 复制链接
const copy = (value: ImgParam) => {
  current.value = value;
  ElMessage({
    message: "图片地址:" + value?.path,
    type: "success",
  });
};

/* 头像裁剪完成回调 */
const onCrop = (result: string) => {
  console.log(result);
  ElMessage({
    message: "编辑成功！",
    type: "success",
  });
};

// 编辑图片
const edit = (value: ImgParam) => {
  current.value = value;
  visible.value = true;
};

const showIcon = (index: number) => {
  isActive.value = index;
};
</script>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
export default defineComponent({
  components: {
    Header: defineAsyncComponent(() => import("./header.vue")),
  },
});
</script>
