<script setup lang="ts">
import { RouterView } from "vue-router";
import { darkTheme } from "naive-ui";
import BaseHeader from "@/components/BaseHeader.vue";
</script>

<template>
  <BaseHeader />
  <n-back-top :right="100" />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style></style>
