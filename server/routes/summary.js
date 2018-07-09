// const session = require('../session')

// module.exports = [{
//   method: 'GET',
//   path: '/summary',
//   config: {
//     handler: async function (request, h) {
//       const state = await session.get()
//       const model = {}
//       var d = new Date()
     

//       // setting Model elements
//       model.date = d
//       model.firstName = state.name.firstName
//       model.lastName = state.name.lastName
//       model.jobTitle = state.role.jobTitle
//       model.staffNumber = state.role.staffNumber
//       model.lineManager = state.lineManager.lineManager
//       model.grade = state.grade.grade
//       model.objectives = state.objectives
//       // model.how = state.objectives.how
//       console.log(model)
//       return h.view('summary', model)
//     }
//   }
// }]
const joi = require('joi')
const session = require('../session')
const ViewModel = require('../models/summary')

const handlers = {
  get: async (request, h) => {
    // Prepare the model
    const state = await session.get()
    const model = new ViewModel(state)
    return h.view('summary', model)

    // Respond with the view
  },
  post: async (request, h) => {
    // Update the session model
    const payload = request.payload
    const type = request.payload.type

    delete payload.type
    const state = await session.get()
    const objectives = state.summary
    objectives.push(payload)

    if (type === 'pdf') {
      const model = new ViewModel(state)
      return h.view('pdf', model)
    } else {
      // Proceed to the next step
      return h.redirect(`/summary`)
    }
  },
  fail: (request, h, error) => {
    // Get the errors and prepare the model
    // const errors = error.details
    const payload = request.payload || {}
    // const model = new ViewModel(payload, errors)
    // Respond with the view with errors
    return h.view('objectives'/*, model*/)
  }
}

module.exports = [{
  method: 'GET',
  path: '/summary',
  options: {
    description: 'Handle the page request for the person name',
    // pre: [{ method: pre.ensureAccountType }],
    handler: handlers.get
  }
}, {
  method: 'POST',
  path: '/summary',
  options: {
    description: 'Handle the page submission the person name',
    // pre: [{ method: pre.ensureAccountType }],
    handler: handlers.post
    // validate: { payload: schema, failAction: handlers.fail }
  }
}]