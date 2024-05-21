import { defineComponent, onMounted } from 'vue'

// import { sleep } from 'telegram/Helpers'

/**
 * nuxt components
 *
 * The built-in components of Nuxt are exported from '#components'.
 */
import { NuxtLayout, NuxtPage } from '#components'
import { useI18n } from '#i18n'
import { getLanguageCode } from '~/composables/utils'

import Loading from '~/components/loading.vue'
import './styles/app.css'

const isBrowser = typeof window !== 'undefined'
const isNode = !isBrowser

/**
 * Sleeps a specified amount of time
 * @param ms time in milliseconds
 * @param isUnref make a timer unref'ed
 * @returns {Promise}
 */
const sleep = (ms: number, isUnref: boolean = false) =>
  new Promise((resolve) =>
    isUnref && isNode ? setTimeout(resolve, ms).unref() : setTimeout(resolve, ms)
  )

export default defineComponent({
  name: 'App',
  setup() {
    const initLoadingRef = ref(true)

    const { locale } = useI18n()

    /**
     * Get the user's language code (inaccurate).
     * Because when Telegram is set to English, the returned language_code is 'hans', which is inconsistent with other scenarios.
     *
     * @returns {string} Returns the user's language code.
     */
    function getLanguage() {
      let lang = window.localStorage.getItem('locale')

      if (!lang) {
        const languageCode = WebApp?.initDataUnsafe.user?.language_code
        lang = languageCode ? getLanguageCode(languageCode) : 'enUs'
        window.localStorage.setItem('locale', lang)
      }

      return lang || 'enUs'
    }

    onMounted(async () => {
      try {
        locale.value = getLanguage()

        WebApp.ready()
        WebApp.expand()
        // WebApp.isClosingConfirmationEnabled = true;
        WebApp.enableClosingConfirmation()
      } catch (error) {
        Logger.error(error)
      } finally {
        await sleep(1000)

        initLoadingRef.value = false
      }
    })

    return () => (
      <>
        {initLoadingRef.value ? (
          <Loading vertical height='100vh' />
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
