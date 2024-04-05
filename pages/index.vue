<script lang="ts" setup>
import Logger from '~/composables/Logger'

import { getLanguageCode } from '~/composables/utils'

const { locale } = useI18n()

const action = [
  { key: 'en-US', text: 'English' },
  { key: 'zh-CN', text: '简体中文' },
  { key: 'zh-TW', text: '繁體中文' },
]

const onSelect = (event: Event) => {
  const value = (event.target as HTMLSelectElement).value
  locale.value = getLanguageCode(value)
  localStorage.setItem('locale', locale.value)
}

// Hooks
onActivated(() => {
  Logger.info('onActivated')
})

onMounted(() => {
  Logger.info('onMounted')
})
</script>

<template>
  <div class="max-h-svh py-3 px-4 bg-color-006934 color-fff">
    index.vue <br />

    language: {{ $t('common.current_language') }} <br />

    change language:
    <select @change="onSelect($event)">
      <option v-for="item in action" :key="item.key" :value="item.key">
        {{ item.text }}
      </option>
    </select>
    <br />

    <nuxt-link to="/menu">
      Menu
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
</style>
