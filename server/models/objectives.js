const content = require('../content').objectives

function ViewModel (session, error) {
  const objectives = session.objectives || {}
  this.what = objectives.what
  this.how = objectives.how
  this.whatLabel = content.what
  this.title = content.title
  this.howLabel = content.how

  this.joiErrorMessage = content.error
  this.hasErrorMessage = !!error
}

module.exports = ViewModel
