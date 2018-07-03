const content = require('../content').grade

function ViewModel (session) {
  const grade = session.grade || {}
  this.grade = grade.grade
  this.title = content.title
  this.gradeLabel = content.grade
}

module.exports = ViewModel