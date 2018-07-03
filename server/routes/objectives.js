const joi = require('joi')
const session = require('../session')

module.exports = [{
  method: 'GET',
  path: '/objectives',
  config: {
    handler: function (request, h) {
      return h.view('objectives')
    }
  }
}, {
  method: 'POST',
  path: '/objectives',
  config: {
    handler: async function (request, h) {
      const payload = request.payload
      const db = await session.merge({ objectives: payload })
      return h.redirect('/summary')
    },
    validate: {
      payload: {
        what: joi.string().required(),
        how: joi.string().required()
      }
    }
  }
}]
