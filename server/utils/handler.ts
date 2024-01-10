import type { EventHandler, EventHandlerRequest } from 'h3'

export function defineWrappedResponseHandler<T extends EventHandlerRequest, D>(handler: EventHandler<T, D>): EventHandler<T, D> {
  // eslint-disable-next-line ts/no-unsafe-return
  return defineEventHandler<T>(async (event) => {
    try {
      // do something before the route handler
      // eslint-disable-next-line ts/await-thenable
      const response = await handler(event)
      // do something after the route handler
      return { response }
    }
    catch (err) {
      // Error handling
      return { err }
    }
  })
}
