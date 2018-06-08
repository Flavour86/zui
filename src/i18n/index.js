import 'jquery'
import utils from 'utils'
import onFire from 'onfire.js'

class I18N {
  constructor(lang) {
    this.lang = lang
    this.map = {}
    this.extendMap = {}
    this._loadCommonResource(lang)
  }

  _loadCommonResource(lang) {
    const nameSpace = 'common'
    const res = require(`./${lang}/common.js`).default
    this.map[nameSpace] = res
  }
  _loadComponentResource(lang, nameSpace, extendLocale) {
    if (!nameSpace) {
      console.warn('nameSpace is not find, Pass in the component name！')
      return
    }
    let comLocale
    // if (Object.prototype.toString.call(comLocale) !== '[object Object]') {
    //   comLocale = {}
    // }
    comLocale = require(`../${nameSpace}/i18n/${lang}.js`).default
    if (!comLocale || !Object.keys(comLocale).length) {
      console.warn(`../${nameSpace}/i18n/${lang}.js is not find!`)
      comLocale = {}
    }
    this.map[nameSpace] = comLocale

    if (extendLocale) {
      if (!this.extendMap[nameSpace]) {
        this.extendMap[nameSpace] = extendLocale
      }
      if (extendLocale[lang]) {
        this.map[nameSpace] = {
          ...this.map[nameSpace],
          ...extendLocale[lang]
        }
      }
    }
  }

  /**
   * 加载组件语言包
   *
   * {string} @param lang  传入的语言，可选
   * {string} @param nameSpace  语言包的命令空间，一般是组件名称, 必传
   * {object} @param extendLocale  语言拓展包，可以覆盖默认的语言值，包含各种语言，一般包含zh_CN，en_US,可选
   */
  getFixedT(nameSpace, lang = utils.LANGUAGE, extendLocale) {
    this._loadComponentResource(lang, nameSpace, extendLocale)
    const current = this.map[nameSpace]
    return this.$t.bind(this, current)
  }

  /** 改变组件的语言
   *
   * @param lang {string} 'zh_CN'
   */
  changLanguage(lang) {
    this.lang = lang
    Object.keys(this.map).forEach(name => {
      if (name === 'common') {
        this._loadCommonResource(lang)
      } else {
        this._loadComponentResource(lang, name, this.extendMap[name])
      }
    })
    console.log(this.map, lang)
    onFire.fire('languageChanged')
  }

  /** 翻译
   *
   * @param current {object} 定位到的当前组件语言集合
   * @param key {string} 语言资源的键值，支持'key.subKey' 以此类推
   * @param options 替换语言包中的占位符
   */
  $t(current, key, options) {
    if (!key) {
      console.warn('i18n key is not find!')
      return
    }
    let value = current
    let keys = key.split('.')
    let ck
    while ((ck = keys.shift()) && value) {
      value = value[ck]
    }
    return options ? this._parseValue(value, options) : value
  }
  _parseValue(value, options) {
    let keys = Object.keys(options)
    if (keys.length) {
      keys.forEach(key => {
        value = value.replace(new RegExp(`{${key}}`, 'img'), options[key])
      })
    }
    return value
  }
}

if (!$.i18n || $.i18n.lang === undefined) {
  $.i18n = new I18N(utils.LANGUAGE)
}
