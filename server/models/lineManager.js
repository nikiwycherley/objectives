const content = require('../content').lineManager

function ViewModel (session, error) {
  const lineManager = session.lineManager || {}
  this.lineManager = lineManager.lineManager
  this.title = content.title
  this.lineManagerLabel = content.lineManager

  this.joiErrorMessage = content.error
  this.hasErrorMessage = !!error
}

module.exports = ViewModel
