const joi = require('joi')
const session = require('../session')

module.exports = [{
  method: 'GET',
  path: '/lineManager',
  config: {
    handler: function (request, h) {
      return h.view('lineManager')
    }
  }
}, {
  method: 'POST',
  path: '/lineManager',
  config: {
    handler: async function (request, h) {
      const payload = request.payload

      const db = await session.merge({ lineManager: payload })

      return h.redirect('/grade')
    },
    validate: {
      payload: {
        lineManager: joi.string().required()
      }
    }
  }
}]
