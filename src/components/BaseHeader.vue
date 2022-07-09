<template>
  <n-page-header class="mt-2">
    <template #title>
      <n-button secondary :bordered="false" @click="toHome"
        ><n-h2 class="m-0 text-stroke-1 tracking-normal"
          ><a>Carbon-Neutrality</a></n-h2
        ></n-button
      >
    </template>
    <template #avatar>
      <n-avatar
        class="ml-8"
        src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
      />
    </template>
    <template #extra>
      <n-space class="mr-2">
        <n-button secondary>数据接口</n-button>
        <n-button secondary>模型结果</n-button>
        <n-button secondary @click="toCarbon">碳脱钩计算</n-button>
        <n-space class="ml-8">
          <n-button primary>登录</n-button>
          <n-button primary>注册</n-button>
        </n-space>
      </n-space>
    </template>
  </n-page-header>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const toHome = () => {
  router.push("/");
};

const toCarbon = () => {
  router.push({
    name: "carbon-decoupling",
    path: "/carbon-decoupling",
  });
};
</script>
