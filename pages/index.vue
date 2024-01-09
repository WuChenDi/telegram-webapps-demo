<template>
  <div id="home-container">
    index.vue
  </div>
</template>

<script lang="ts" setup>
import Logger from '~/composables/Logger'

// Hooks
onActivated(async () => {
  Logger.info('onActivated')
})

onMounted(() => {
  Logger.info('onMounted')
})
</script>

<style lang="scss" scoped>
#home-container {
  background-color: #006934;
  max-height: 100svh;
  padding: 0.7rem 1rem;
}
</style>
