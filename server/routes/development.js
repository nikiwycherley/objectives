const joi = require('joi')
const session = require('../session')

module.exports = [{
  method: 'GET',
  path: '/development',
  config: {
    handler: function (request, h) {
      return h.view('development')
    }
  }
}, {
  method: 'POST',
  path: '/development',
  config: {
    handler: async function (request, h) {
      const payload = request.payload
      const db = await session.merge({ development: payload })
      return h.redirect('/summary')
    },
    validate: {
      payload: {
        development: joi.string().required()
      }
    }
  }
}]
