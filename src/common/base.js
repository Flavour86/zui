import 'jquery/jquery.js'
import 'jquery-ui'
import Variables from 'common/variables'

$.widget('zui.base', {
  version: Variables.page.version,
  // default options
  options: {},
  _element: null,
  // The constructor
  _create: function () {
    if (Object.prototype.toString.call(this.element[0]) !== '[object Window]') {
      this._element = this.element.clone()
    }
    $.extend(this.options, {
      disabled: this.element.prop('disabled'),
      checked: this.element.prop('checked'),
      readonly: this.element.prop('readonly')
    }, this.options)
  },
  _init: function () {},
  // Events bound via _on are removed automatically
  // revert other modifications here
  _destroy: function () {
    if (this._element && this.element) {
      var cls = this._element.attr('class')
      this.element.html(this._element.html())
      if (cls) {
        this.element.attr('class', cls)
      } else {
        this.element.removeAttr('class')
      }
      this._element.remove()
    }
  },
  show: function () {
    this._show(this.element, this.options.show)
  },
  hide: function () {
    this._hide(this.element, this.options.hide)
  },
  /**
   * 对columns快速排序
   */
  _sortColumn: function (columns) {
    if (!columns) return columns
    let len = columns.length
    if (len <= 1) {
      return columns
    }
    let num = Math.floor(len / 2)
    let column = columns.splice(num, 1)[0]
    if (!$.isNumeric(column.sort)) {
      column.sort = num
    }
    let left = []
    let right = []
    for (var i = 0; i < columns.length; i++) {
      if (!$.isNumeric(columns[i].sort)) {
        columns[i].sort = i
      }
      parseInt(columns[i].sort) < parseInt(column.sort) ? left.push(columns[i]) : right
        .push(columns[i])
    }
    return this._sortColumn(left).concat([column], this._sortColumn(right))
  }
})
