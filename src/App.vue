<script setup lang="ts">
import { RouterView } from "vue-router";
import { darkTheme } from "naive-ui";
import BaseHeader from "@/components/BaseHeader.vue";
</script>

<template>
  <BaseHeader />
  <n-back-top :right="100" />
  <RouterView />
</template>

<style></style>
