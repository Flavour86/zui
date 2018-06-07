import 'common/base'
import 'icheck'

$.widget('zui.checkbox', $.zui.base, {
  options: {
    checkboxClass: 'icheckbox_flat-blue',
    separator: ','
  },
  _init: function () {
    this._super()
    this._initCheckbox()
  },
  // private
  _items: [],
  _value: [],
  _text: [],
  _initCheckbox: function () {
    var that = this
    var name = (this.element.attr('name') || this.element.attr('id')) + '-zui-checkbox'
    $(this.options.items).each(function (index) {
      var chk = $('<input type="checkbox" name=' + name + ' data-value=' + this.value + ' data-text=' + this.label + '/>')
      var label = $("<label class='checkbox-inline' />").append(chk).append(this.label)
      that.element.append(label)
      chk.on('ifToggled', function () {
        that._doSetValue()
      })
      that._items.push({
        value: this.value,
        $chk: chk
      })
    })

    this.element.addClass('checkbox').find(':checkbox').iCheck(this.options)
  },
  _doSetValue: function () {
    var that = this
    this._value = []
    this._text = []
    $(this._items).each(function () {
      if (this.$chk && this.$chk.length) {
        var checked = this.$chk.prop('checked')
        if (checked) {
          var data = this.$chk.data()
          that._value.push(data.value)
          that._text.push(data.text)
        }
      }
    })
  },
  // iCheck代理函数
  _proxy: function (method, value) {
    var that = this
    var todo = function (v) {
      $(that._items).filter(function () {
        return v == null || v === undefined || this.value === v
      }).each(function () {
        this.$chk.iCheck(method)
      })
    }
    if ($.isArray(value)) {
      $(value).each(function () {
        todo(this)
      })
    } else if (value !== null && value !== undefined) {
      $(value.split(this.options.separator)).each(function () {
        todo(this)
      })
    } else {
      todo(value)
    }
  },
  // API
  check: function (value) {
    this._proxy('check', value)
  },
  unCheck: function (value) {
    this._proxy('uncheck', value)
  },
  toggle: function (value) {
    this._proxy('toggle', value)
  },
  disable: function (value) {
    this._proxy('disable', value)
  },
  enable: function (value) {
    this._proxy('enable', value)
  },
  destroy: function () {
    this._super()
    this._proxy('destroy')
  },
  /**
   * 设置控件的值
   */
  setValue: function (value) {
    this.unCheck()
    if (value !== null && value !== undefined) {
      this.check(value)
    }
  },
  /**
   * 获取控件的值
   */
  getValue: function () {
    return (this._value && this._value.length) ? this._value : null
  }
})
