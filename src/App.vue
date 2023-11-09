<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/sidebar.vue';
import { useUserStore } from './stores/user';

const store = useUserStore()
</script>

<template>
  <Sidebar v-if="store.isAuthenticated" />
  <RouterView />
</template>

<style scoped></style>
