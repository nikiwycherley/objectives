const joi = require('joi')
const session = require('../session')
const ViewModel = require('../models/objectives')

const handlers = {
  get: async (request, h) => {
    // Prepare the model
    const state = await session.get()
    const model = new ViewModel(state)
    return h.view('objectives', model)

    // Respond with the view
  },
  post: async (request, h) => {
    // Update the session model
    const payload = request.payload
    const db = await session.merge({ objectives: payload })

    // Proceed to the next step
    return h.redirect(`/summary`)
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
  path: '/objectives',
  options: {
    description: 'Handle the page request for the person name',
    // pre: [{ method: pre.ensureAccountType }],
    handler: handlers.get
  }
}, {
  method: 'POST',
  path: '/objectives',
  options: {
    description: 'Handle the page submission the person name',
    // pre: [{ method: pre.ensureAccountType }],
    handler: handlers.post
    // validate: { payload: schema, failAction: handlers.fail }
  }
}]
