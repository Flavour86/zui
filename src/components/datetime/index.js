import 'bootstrap-datetime-picker/css/bootstrap-datetimepicker.min.css'
import 'common/base'
import 'bootstrap-datetime-picker'
import moment from 'moment'
import utils from 'utils'

$.widget('zui.datetime', $.zui.base, {
  options: {
    datetimeOptions: {
      format: 'yyyy-mm-dd hh:ss'
    },
    lang: utils.LANGUAGE,
    extendLocale: {},
    isDpFormat: false,
    change: function (date) {},
    hide: function (date) {}
  },
  _init: function () {
    this._super()
    if (this.options.datetimeOptions) {
      if (!this.options.isDpFormat) {
        this.options.datetimeOptions.format = this
          ._getDatetimePickerFormat(this.options.datetimeOptions.format)
      }
    }
    this._mergeI18nLocale()
    this._initDateTimePicker()
    if (this.options.value) {
      this.setValue(this.options.value)
    }
  },
  // 合并i18n语言包
  _mergeI18nLocale() {
    console.log($.fn.datetimepicker, this.options.lang, this.options.extendLocale, this)
    const {options: {lang, extendLocale}} = this
    const languageRes = require(`./i18n/${lang}.js`)
    $.extend($.fn.datetimepicker.default.tooltips, languageRes, extendLocale)
  },
  // private
  _getDatetimePickerFormat: function (format) {
    if (!format) return null
    // format = format.replace('yyyy', 'YYYY')
    // format = format.replace('dd', 'DD')
    return format
  },
  _initDateTimePicker: function () {
    var that = this
    var dateTimeOpts = $.extend({
      showTodayButton: true,
      showClear: true,
      showClose: true,
      useCurrent: false,
      allowInputToggle: true
    }, this.options.datetimeOptions)
    var $dateElement = this.element
      .addClass('form-control')
      .wrap("<div class='input-group input-append date' />")
      .after('<span class="add-on"><i class="icon-remove"></i></span><span class="add-on"><i class="icon-th"></i></span>')
      .parent()
    // 事件
    $dateElement.datetimepicker(dateTimeOpts).on('changeDate', function (e) {
      that.element.val(moment(e.date).format('YYYY-MM-DD HH:ss'))
      that._trigger('change', e, e.data)
    }).on('hide', function (e) {
      that._trigger('hide', e, e.data)
    }).on('show', function (e) {
      that._trigger('show', e)
    }).on('update', function (e) {
      that._trigger('update', e, e.data)
    })
    this._dateTimePicker = $dateElement.data('DateTimePicker')
  },

  // API
  /**
   * 设置控件的值
   */
  setValue: function (value) {
    this._dateTimePicker.date(value)
  },
  /**
   * 获取控件的值
   */
  getValue: function () {
    return this.element.val()
  }
})
