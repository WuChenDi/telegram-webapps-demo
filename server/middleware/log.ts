import Logger from '~/composables/Logger'

export default defineEventHandler((event) => {
  Logger.log(`New request: ${getRequestURL(event).toString()}`)
})
