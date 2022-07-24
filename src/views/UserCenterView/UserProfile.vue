<template>
  <n-thing>
    <template #avatar>
      <n-avatar>
        <n-icon>
          <cash-icon />
        </n-icon>
      </n-avatar>
    </template>
    <template #header> 用户 </template>
    <template #description> 简介 </template>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
    sapiente cum libero nostrum perspiciatis deleniti consectetur obcaecati
    velit, a, veritatis, odio perferendis neque mollitia dolor aperiam dolorem
    nulla! Quia, quam?
    <template #action>
      <n-space>
        <n-button size="small"> ID </n-button>
        <n-button size="small"> 邮箱 </n-button>
        <n-button size="small"> 手机 </n-button>
        <n-button size="small">
          <template #icon>
            <n-icon>
              <cash-icon />
            </n-icon>
          </template>
          积分
        </n-button>
      </n-space>
    </template>
  </n-thing>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { CashOutline as CashIcon } from "@vicons/ionicons5";
</script>
