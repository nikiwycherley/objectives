const joi = require('joi')
const session = require('../session')
const ViewModel = require('../models/name')

const handlers = {
  get: async (request, h) => {
    // Prepare the model
    const state = await session.get()
    const model = new ViewModel(state)
    return h.view('name', model)

    // Respond with the view
  },
  post: async (request, h) => {
    // Update the session model
    const payload = request.payload
    const db = await session.merge({ name: payload })

    // Proceed to the next step
    return h.redirect(`/jobTitle`)
  },
  fail: (request, h, error) => {
    // Get the errors and prepare the model
    const errors = error
    const payload = request.payload || {}
    const model = new ViewModel(payload, errors)
    // Respond with the view with errors
    return h.view('name', model).takeover()
  }
}

module.exports = [{
  method: 'GET',
  path: '/name',
  options: {
    description: 'Handle the page request for the person name',
    handler: handlers.get
  }
}, {
  method: 'POST',
  path: '/name',
  options: {
    description: 'Handle the page submission the person name',
    handler: handlers.post,
    validate: {
      payload: {
        firstName: joi.string().required(),
        lastName: joi.string().required()
      },
      failAction: handlers.fail
    }
  }
}]
