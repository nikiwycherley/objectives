const content = require('../content').jobTitle

function ViewModel (session, error) {
  const role = session.role || {}
  this.jobTitle = role.jobTitle
  this.staffNumber = role.staffNumber
  this.jobTitleLabel = content.jobTitle
  this.title = content.title
  this.staffNumberLabel = content.staffNumber

  this.joiErrorMessage = content.error
  this.hasErrorMessage = !!error
}

module.exports = ViewModel
