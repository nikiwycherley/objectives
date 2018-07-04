const content = require('../content').objectives

function ViewModel (session) {
  const objectives = session.objectives || {}
  this.what = objectives.what
  this.how = objectives.how
  this.whatLabel = content.what
  this.title = content.title
  this.howLabel = content.how
}

module.exports = ViewModel
