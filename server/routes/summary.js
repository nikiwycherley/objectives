const session = require('../session')

module.exports = [{
  method: 'GET',
  path: '/summary',
  config: {
    handler: async function (request, h) {
      const state = await session.get()
      const model = {}
      var d = new Date()
      var fullDate = d.getDay() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
     
      // setting Model elements
      model.date = fullDate
      model.firstName = state.name.firstName
      model.lastName = state.name.lastName
      model.jobTitle = state.role.jobTitle
      model.staffNumber = state.role.staffNumber
      model.lineManager = state.lineManager.lineManager
      model.grade = state.grade.grade
      model.objectives = state.objectives
      // model.how = state.objectives.how
      console.log(model)
      return h.view('summary', model)
    }
  }
}]
