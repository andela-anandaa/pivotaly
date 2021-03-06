const _ = require("lodash")

exports.transformForUser = function(command) {
  const limit = "story".length
  const prefix = command.slice(0, -(limit))
  return (`${prefix} story`).toUpperCase()
}

exports.reverseCommandFromUser = function(commandUserString) {
  return _.camelCase(commandUserString)
}
