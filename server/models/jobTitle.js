const content = require('../content').jobTitle

function ViewModel (title) {
  title = title || {}
  this.jobTitle = content.jobTitle
  this.staffNumber = content.staffNumber
}

module.exports = ViewModel
