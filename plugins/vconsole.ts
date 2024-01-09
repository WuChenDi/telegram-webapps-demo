import VConsole from 'vconsole'

export default defineNuxtPlugin(() => {
  process.env.NODE_ENV === 'development' ? new VConsole() : ''
})
