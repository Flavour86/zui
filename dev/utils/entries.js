var glob = require('glob')

var modulePath = './src/components/'
var entries = {}

glob.sync(modulePath + '**/index.js').forEach(function (entry) {
  var matches = new RegExp(modulePath + '(.*)/index\\.js').exec(entry)
  if (matches && matches[1]) {
    entries['components/' + matches[1] + '/' + matches[1]] = entry
  }
})
module.exports = entries
