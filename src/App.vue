<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { initRouter, currentView } from '@/utils/manualRouter'

initRouter();
</script>

<template>
  <MainLayout>
    <component :is="currentView" />
  </MainLayout>
</template>

<style scoped></style>
