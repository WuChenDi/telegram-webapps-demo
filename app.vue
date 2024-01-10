<script lang="ts" setup>
const initLoadingRef = ref(true)

// Hooks
onMounted(async () => {
  try {
    WebApp.ready()
    WebApp.expand()
    // WebApp.isClosingConfirmationEnabled = true;
    WebApp.enableClosingConfirmation()
    initLoadingRef.value = false
  } catch (error) {
    // initLoadingRef.value = false
    Logger.error(error)
  }
})
</script>

<template>
  <Loading v-if="initLoadingRef" vertical height="100vh" />
  <NuxtLayout v-else>
    <NuxtPage />
    <!-- <NuxtWelcome /> -->
  </NuxtLayout>
</template>
