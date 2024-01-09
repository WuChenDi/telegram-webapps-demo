import VConsole from 'vconsole'

export default defineNuxtPlugin(() => {
  // eslint-disable-next-line no-unused-expressions, node/prefer-global/process
  process.env.NODE_ENV === 'development' ? new VConsole() : ''
})
