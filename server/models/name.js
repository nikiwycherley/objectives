const content = require('../content').name

function ViewModel (session, error) {
  const name = session.name || {}
  this.firstName = name.firstName
  this.lastName = name.lastName
  this.firstNameLabel = content.firstName
  this.lastNameLabel = content.lastName

  this.joiErrorMessage = content.error
  this.hasErrorMessage = !!error
}

module.exports = ViewModel
