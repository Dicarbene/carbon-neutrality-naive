<template>
  <n-input-group>
    <n-input
      type="password"
      show-password-on="click"
      placeholder="Token"
      :value="userData.user.value.token"
    />
    <n-button type="primary" ghost @click="show"> 重置token </n-button>
  </n-input-group>
  <n-modal
    v-model:show="showRefreshTokenModal"
    :mask-closable="false"
    preset="dialog"
    title="重置token"
    positive-text="确认"
    negative-text="算了"
    @positive-click="onPositiveClick"
    @negative-click="onNegativeClick"
  >
    <n-text>请输入你的用户密码，以重置token。</n-text>
    <n-input
      type="password"
      show-password-on="click"
      placeholder="请输入你的用户密码"
      v-model:value="userPassword"
    />
  </n-modal>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/useUserStore.js";
import { useMessage } from "naive-ui";
const message = useMessage();
const userStore = useUserStore();
const userData = storeToRefs(userStore);
const showRefreshTokenModal = ref(false);

const userPassword = ref("");

const show = () => {
  showRefreshTokenModal.value = true;
};
const onNegativeClick = () => {
  showRefreshTokenModal.value = false;
};
const onPositiveClick = () => {
  const formData = new FormData();
  formData.append("uid", userData.user.value.uid);
  formData.append("password", userPassword.value);
  const requestOptions = {
    method: "POST",
    body: formData,
  };
  fetch("http://47.103.132.247:9014/generate_token", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.code === 0) {
        message.success("token刷新成功成功");
        userStore.$patch((state) => {
          state.user.token = result.msg.token;
        });
      }
    })
    .catch((error) => message.error(error.message));
  showRefreshTokenModal.value = false;
};
</script>
