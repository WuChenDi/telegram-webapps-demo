import { WebApp } from '~/composables/webapp'

function getUserId() {
  const userId = WebApp?.initDataUnsafe.user?.id
  if (userId) {
    window.localStorage.setItem('userId', userId.toString())
  }

  return Number(userId || window.localStorage.getItem('userId'))
}

function getUserInitData() {
  const initData = WebApp?.initData

  if (initData !== 'user') {
    window.localStorage.setItem('userInitData', initData)
  }

  if (initData === 'user') {
    return window.localStorage.getItem('userInitData')
  }
  return initData
}

export const USER_ID = getUserId()
export const USER_INIT_DATA = getUserInitData()
