const content = require('../content').lineManager

function ViewModel (session) {
  const lineManager = session.lineManager || {}
  this.lineManager = lineManager.lineManager
  this.title = content.title
  this.lineManagerLabel = content.lineManager
}

module.exports = ViewModel