import { defineComponent, onMounted } from 'vue'

/**
 * nuxt components
 *
 * The built-in components of Nuxt are exported from '#components'.
 */
import { NuxtLayout, NuxtPage } from '#components'

import Loading from '~/components/loading.vue'

export default defineComponent({
  name: 'App',
  setup() {
    const initLoadingRef = ref(true)

    onMounted(async () => {
      try {
        WebApp.ready()
        WebApp.expand()
        // WebApp.isClosingConfirmationEnabled = true;
        WebApp.enableClosingConfirmation()
      } catch (error) {
        Logger.error(error)
      } finally {
        initLoadingRef.value = false
      }
    })

    return () => (
      <>
        {initLoadingRef.value ? (
          <Loading vertical height="100vh" />
        ) : (
          <NuxtLayout>
            <NuxtPage />
            {/* <NuxtWelcome /> */}
          </NuxtLayout>
        )}
      </>
    )
  },
})
