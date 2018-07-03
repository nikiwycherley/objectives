const content = require('../content').jobTitle

function ViewModel (session) {
  const role = session.role || {}
  this.jobTitle = role.jobTitle
  this.staffNumber = role.staffNumber
  this.jobTitleLabel = content.jobTitle
  this.title = content.title
  this.staffNumberLabel = content.staffNumber
}

module.exports = ViewModel
