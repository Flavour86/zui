import 'jquery'
import onFire from 'onfire.js'
import utils from 'utils'

class I18N {
  constructor() {
    this.lang = utils.LANGUAGE  // 默认语言
    this.map = {}  // 语言资源集合
    this.extendMap = {}  // 记录组件拓展语言包
  }

  _loadCommonResource() {
    const nameSpace = 'common'
    if (!this.map[nameSpace]) {
      const res = require(`./${this.lang}/common.js`)
      this.map[nameSpace] = res
    }
  }
  _loadComponentResource(nameSpace, extendLocale) {
    if (!nameSpace) {
      console.warn('nameSpace is not find, Pass in the component name！')
      return
    }
    let comLocale
    // if (Object.prototype.toString.call(comLocale) !== '[object Object]') {
    //   comLocale = {}
    // }
    comLocale = require(`components/${nameSpace}/i18n/${this.lang}.js`)
    if (!comLocale || !Object.keys(comLocale).length) {
      comLocale = {}
    }
    this.map[nameSpace] = comLocale

    if (extendLocale) {
      if (!this.extendMap[nameSpace]) {
        this.extendMap[nameSpace] = extendLocale
      }
      if (extendLocale[this.lang]) {
        this.map[nameSpace] = {
          ...this.map[nameSpace],
          ...extendLocale[this.lang]
        }
      }
    }
  }

  /**
   * 加载组件语言包
   *
   * {string} @param nameSpace  语言包的命令空间，一般是组件名称, 必传
   * {object} @param extendLocale  语言拓展包，可以覆盖默认的语言值，包含各种语言，一般包含zh_CN，en_US,可选
   * * {string} @param lang  初始化组件语言包的时候传入的语言，可选
   */
  getFixedT(nameSpace, extendLocale, lang) {
    if (!lang && Object.prototype.toString.call(extendLocale) === '[object String]') {
      this.lang = extendLocale
      extendLocale = null
    } else {
      this.lang = lang
    }
    this._loadCommonResource()
    this._loadComponentResource(nameSpace, extendLocale)
    const current = this.map[nameSpace]
    return this.$t.bind(this, current)
  }

  /** 改变组件的语言
   *
   * @param lang {string} 'zh_CN'
   */
  changLanguage(lang = utils.LANGUAGE) {
    if (this.lang !== lang) {
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
  }

  /** 翻译
   *
   * @param current {object} 定位到的当前组件语言集合，由getFixedT传入
   * @param key {string} 语言资源的键值，支持'key.subKey' 以此类推
   * @param options 替换语言包中的占位符
   */
  $t(current, key, options) {
    if (!key) {
      console.warn('i18n key is not find!')
      return
    }

    let value = this._getValueByKey(key, current, options)
    if (value === undefined) {
      value = this._getValueByKey(key, this.map['common'], options)
    }
    return value
  }
  _parseValue(value, options) {
    let keys = Object.keys(options)
    if (keys.length && value) {
      keys.forEach(key => {
        value = value.replace(new RegExp(`{${key}}`, 'img'), options[key])
      })
    }
    return value
  }
  _getValueByKey(key, current, options) {
    let value = current
    let keys = key.split('.')
    let ck
    while ((ck = keys.shift()) && value) {
      value = value[ck]
    }
    value = options ? this._parseValue(value, options) : value
    return value
  }
}

if (!$.i18n || $.i18n.lang === undefined) {
  $.i18n = new I18N(utils.LANGUAGE)
}
