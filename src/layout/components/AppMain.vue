<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
          <component :is="Component" :key="route.path" />
    </router-view>
  </section>
</template>

<script lang="ts" setup>
const router = useRouter()
const allRoutes = router.getRoutes()
// const keepAliveRouteNames = computed(() => {
//   return allRoutes.filter(route => route.meta?.keepAlive).map(route => route.name) || {}
// })
</script>

