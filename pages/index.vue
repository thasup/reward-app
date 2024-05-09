<template>
  <MainLayout>
    hello world {{ points }}
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'

const userStore = useUserStore();

const points = ref(0);
const isLoading = ref(false);

onBeforeMount(() => {
  points.value = 2000;
})
</script>