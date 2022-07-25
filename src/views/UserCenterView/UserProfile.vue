<template>
  <n-thing>
    <template #avatar>
      <n-avatar>
        <n-icon>
          <person-icon />
        </n-icon>
      </n-avatar>
    </template>
    <template #header> {{ userData.user.value.username }} </template>
    <template #action>
      <n-descriptions label-placement="left" title="">
        <n-descriptions-item label="用户ID">
          {{ userData.user.value.uid }}
        </n-descriptions-item>
        <n-descriptions-item label="公司">
          {{ userData.user.value.company }}
        </n-descriptions-item>
        <n-descriptions-item label="部门">
          {{ userData.user.value.dept }}
        </n-descriptions-item>
        <n-descriptions-item label="夜宵"> </n-descriptions-item>
      </n-descriptions>
    </template>
  </n-thing>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/useUserStore.js";
import { PersonOutline as PersonIcon } from "@vicons/ionicons5";
const userStore = useUserStore();
const userData = storeToRefs(userStore);
</script>
