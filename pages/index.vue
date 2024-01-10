<script lang="ts" setup>
import Logger from '~/composables/Logger'

// Hooks
onActivated(() => {
  Logger.info('onActivated')
})

onMounted(() => {
  Logger.info('onMounted')
})
</script>

<template>
  <div id="home-container">
    index.vue <br />

    <nuxt-link to="/menu"> Menu </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
#home-container {
  background-color: #006934;
  max-height: 100svh;
  padding: 0.7rem 1rem;
}
</style>
