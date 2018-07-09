function ViewModel (session) {
  this.firstName = session.name.firstName
  this.lastName = session.name.lastName
  this.jobTitle = session.role.jobTitle
  this.staffNumber = session.role.staffNumber
  this.grade = session.grade.grade
  this.objectives = session.objectives
  this.lineManager = session.lineManager.lineManager
  var d = new Date()
  this.date = d
}

module.exports = ViewModel
