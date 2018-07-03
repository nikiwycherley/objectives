const joi = require('joi')
const session = require('../session')
const ViewModel = require('../models/jobTitle')

const handlers = {
  get: (request, h) => {
    // Prepare the model
    
    const model = new ViewModel()
    return h.view('jobTitle', model)

    // Respond with the view
  },
  post: async (request, h) => {
    // Update the session model
    const payload = request.payload
    const db = await session.merge({ role: payload })

    // Proceed to the next step
    return h.redirect(`/lineManager`)
  },
  fail: (request, h, error) => {
    // Get the errors and prepare the model
    // const errors = error.details
    const payload = request.payload || {}
    // const model = new ViewModel(payload, errors)
    // Respond with the view with errors
    return h.view('jobTitle'/*, model*/)
  }
}

module.exports = [{
  method: 'GET',
  path: '/jobTitle',
  options: {
    description: 'Handle the page request for the person name',
    // pre: [{ method: pre.ensureAccountType }],
    handler: handlers.get
  }
}, {
  method: 'POST',
  path: '/jobTitle',
  options: {
    description: 'Handle the page submission the person name',
    // pre: [{ method: pre.ensureAccountType }],
    handler: handlers.post
    // validate: { payload: schema, failAction: handlers.fail }
  }
}]
