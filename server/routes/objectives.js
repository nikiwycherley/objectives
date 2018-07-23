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
    const type = request.payload.type

    delete payload.type
    const state = await session.get()
    const objectives = state.objectives
    objectives.push(payload)

    if (type === 'add') {
      const model = new ViewModel(state)
      return h.view('objectives', model)
    } else {
      // Proceed to the next step
      return h.redirect(`/summary`)
    }
  },
  fail: (request, h, error) => {
    // Get the errors and prepare the model
    const errors = error
    const payload = request.payload || {}
    const model = new ViewModel(payload, errors)
    console.log(payload)
    // Respond with the view with errors
    return h.view('objectives', model).takeover()
  }
}

module.exports = [{
  method: 'GET',
  path: '/objectives',
  options: {
    description: 'Handle the page request for the person name',
    handler: handlers.get
  }
}, {
  method: 'POST',
  path: '/objectives',
  options: {
    description: 'Handle the page submission the person name',
    handler: handlers.post,
    validate: {
      payload: {
        what: joi.string().required(),
        how: joi.string().required(),
        type: joi.string()
      },
      failAction: handlers.fail
    }
  }
}]
