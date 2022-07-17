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
          <n-form>
            <n-form-item-row label="用户名" required>
              <n-input placeholder="请输入用户名" />
            </n-form-item-row>
            <n-form-item-row label="密码" required>
              <n-input
                type="password"
                show-password-on="click"
                placeholder="请输入密码"
                :maxlength="8"
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
          <n-button type="primary" block secondary strong> 登录 </n-button>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="注册">
          <n-form>
            <n-form-item-row label="用户名">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="密码">
              <n-input
                type="password"
                show-password-on="click"
                placeholder="请输入密码"
                :maxlength="8"
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
              <n-input placeholder="请输入电话号码" :maxlength="8"> </n-input>
            </n-form-item-row>
            <n-form-item-row label="邀请码">
              <n-input placeholder="请输入邀请码"> </n-input>
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong> 注册 </n-button>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>
<script lang="ts" setup>
import { GlassesOutline, Glasses } from "@vicons/ionicons5";

const login = () => {
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "admin",
      password: "admin",
    }),
  });
};
const register = () => {
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "admin",
      password: "admin",
    }),
  });
};
</script>
