<template>
  <n-page-header class="p-4 border-b-cool-gray-200 border-b-1">
    <template #title>
      <n-button
        text
        @click="toHome"
        class="text-xl m-0 text-stroke-1 tracking-normal"
        >Carbon-Neutrality</n-button
      >
    </template>
    <template #avatar> </template>
    <template #extra>
      <n-space class="mr-2">
        <n-button secondary @click="toDocs">数据接口</n-button>
        <n-button secondary>模型结果</n-button>
        <n-button secondary @click="toCarbon">碳脱钩计算</n-button>
        <n-space class="ml-8">
          <user-status />
        </n-space>
      </n-space>
    </template>
  </n-page-header>
</template>

<script lang="ts" setup>
import userStatus from "@/components/userStatus.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const toHome = () => {
  router.push("/");
};

const toDocs = () => {
  router.push("/docs");
};

const toCarbon = () => {
  router.push({
    name: "carbon-decoupling",
    path: "/carbon-decoupling",
  });
};
</script>
