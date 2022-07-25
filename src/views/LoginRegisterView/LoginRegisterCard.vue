<template>
  <div class="flex justify-center align-middle">
    <n-card size="medium" class="w-128 mt-32">
      <n-tabs
        class="card-tabs"
        default-value="signin"
        size="large"
        animated
        justify-content="space-evenly"
        style="margin: 0 -4px"
        pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
      >
        <n-tab-pane name="signin" tab="登录">
          <n-form :value="loginProps">
            <n-form-item-row label="用户名" required>
              <n-input
                v-model:value="loginProps.username"
                placeholder="请输入用户名"
              />
            </n-form-item-row>
            <n-form-item-row label="密码" required>
              <n-input
                type="password"
                show-password-on="click"
                placeholder="请输入密码"
                v-model:value="loginProps.password"
              >
                <template #password-visible-icon>
                  <n-icon :size="16" :component="GlassesOutline" />
                </template>
                <template #password-invisible-icon>
                  <n-icon :size="16" :component="Glasses" />
                </template>
              </n-input>
            </n-form-item-row>
          </n-form>
          <n-button
            @click="login"
            @keyup.enter="login"
            type="primary"
            block
            secondary
            strong
          >
            登录
          </n-button>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="注册">
          <n-form :value="registerProps">
            <n-form-item-row label="用户名" required>
              <n-input placeholder="请输入用户名" />
            </n-form-item-row>
            <n-form-item-row label="密码" required>
              <n-input
                type="password"
                show-password-on="click"
                placeholder="请输入密码"
              >
                <template #password-visible-icon>
                  <n-icon :size="16" :component="GlassesOutline" />
                </template>
                <template #password-invisible-icon>
                  <n-icon :size="16" :component="Glasses" />
                </template>
              </n-input>
            </n-form-item-row>
            <n-form-item-row label="电话号码">
              <n-input placeholder="请输入电话号码" :maxlength="11"> </n-input>
            </n-form-item-row>
            <n-form-item-row label="邀请码">
              <n-input placeholder="请输入邀请码"> </n-input>
            </n-form-item-row>
          </n-form>
          <n-button @click="register" type="primary" block secondary strong>
            注册
          </n-button>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import { useMessage } from "naive-ui";
import { GlassesOutline, Glasses } from "@vicons/ionicons5";
import { useUserStore } from "@/stores/useUserStore.js";
interface LoginType {
  username: string | null;
  password: string | null;
}
interface RegisterType {
  username: string | null;
  password: string | null;
  //phone: string | null;
  //inviteCode: string | null;
}

const userStore = useUserStore();
const message = useMessage();
const loginProps: Ref<LoginType> = ref({
  username: null,
  password: null,
});
const registerProps: Ref<RegisterType> = ref({
  username: null,
  password: null,
});

const login = () => {
  const formData = new FormData();
  formData.append("username", `${loginProps.value.username}`);
  formData.append("password", `${loginProps.value.password}`);
  const requestOptions = {
    method: "POST",
    body: formData,
    mode: "no-cors",
  };
  fetch("http://47.103.132.247:9014/user_login", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.code === 0) {
        if (result.mas === "LOGIN_SUCCESS") {
          userStore.$patch((state) => {
            state.user = result.data;
            state.isLogin = true;
          });
          message.success("登陆成功，点击右上角进入用户中心");
        }
      } else if (result.code === 1) {
        message.error("服务器错误");
      }
    })
    .catch((error) => message.error(error.message));
};
const register = () => {
  const formData = new FormData();
  formData.append("username", `${registerProps.value.username}`);
  formData.append("password", `${registerProps.value.password}`);
  const requestOptions = {
    method: "POST",
    body: formData,
  };
  fetch("http://47.103.132.247:9014/user_register", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.code === 0) {
        message.success("注册成功, 请登录");
      }
    })
    .catch((error) => message.error(error.message));
};
</script>
