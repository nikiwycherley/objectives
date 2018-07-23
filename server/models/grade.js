const content = require('../content').grade

function ViewModel (session, error) {
  const grade = session.grade || {}
  this.grade = grade.grade
  this.title = content.title
  this.gradeLabel = content.grade

  this.joiErrorMessage = content.error
  this.hasErrorMessage = !!error
}

module.exports = ViewModel
