/**
 * Converts a language code to its corresponding language identifier.
 * @param language - The language code to convert.
 * @returns The corresponding language identifier.
 */
export const getLanguageCode = (language: string) => {
  let lang = ''
  switch (language.toLowerCase()) {
    case 'zh-cn':
      lang = 'zhCn'
      break
    case 'zh-hans':
      lang = 'zhCn'
      break
    case 'zh-tw':
      lang = 'zhTw'
      break
    case 'zh-hant':
      lang = 'zhTw'
      break
    case 'en-us':
      lang = 'enUs'
      break
    case 'en':
      lang = 'enUs'
      break
    default:
      lang = 'enUs'
      break
  }
  return lang
}
