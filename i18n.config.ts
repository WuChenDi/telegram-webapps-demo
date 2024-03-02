import { enUsMessages, zhCnMessages, zhTwMessages } from '@/i18n'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'enUs',
  messages: {
    enUs: enUsMessages,
    zhCn: zhCnMessages,
    zhTw: zhTwMessages,
  },
}))
