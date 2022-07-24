<template>
  <div class="flex justify-center align-middle">
    <n-card
      title="用户中心"
      embedded
      style="margin-bottom: 16px"
      size="medium"
      class="w-400 mx-12 mt-8"
    >
      <n-tabs type="line" animated justify-content="space-evenly">
        <n-tab-pane name="profile" tab="个人资料">
          <UserProfile />
        </n-tab-pane>
        <n-tab-pane name="settings" tab="资料设置"> 资料设置 </n-tab-pane>
        <n-tab-pane name="token" tab="接口Token"> 接口Token </n-tab-pane>
        <n-tab-pane name="security" tab="安全设置"> 安全设置 </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>
<script setup lang="ts">
import UserProfile from "./UserProfile.vue";
</script>
