import VConsole from 'vconsole'

export default defineNuxtPlugin(() => {
  // eslint-disable-next-line no-unused-expressions
  process.env.NODE_ENV === 'development' ? new VConsole() : ''
})
