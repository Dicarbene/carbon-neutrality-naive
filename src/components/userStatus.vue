<template>
  <n-button v-if="!userData.isLogin.value" @click="toLoginRegister" primary>
    登录 /&ThickSpace;
    <n-gradient-text type="success"> 注册 </n-gradient-text>
  </n-button>
  <n-avatar
    v-else
    @click="toUserCenter"
    class="hover:cursor-pointer"
    size="medium"
  >
    user
  </n-avatar>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/useUserStore.js";
import { useRouter } from "vue-router";
const userStore = useUserStore();
const userData = storeToRefs(userStore);
const router = useRouter();
const toLoginRegister = () => {
  router.push({
    name: "login-register",
    path: "/loginregister",
  });
};
const toUserCenter = () => {
  router.push({
    name: "user-center",
    path: "/usercenter",
  });
};
</script>
