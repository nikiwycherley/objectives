const content = require('../content').name

function ViewModel (session) {
  const name = session.name || {}
  this.firstName = name.firstName
  this.lastName = name.lastName
  this.firstNameLabel = content.firstName
  this.lastNameLabel = content.lastName
}

module.exports = ViewModel
