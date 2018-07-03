const joi = require('joi')
const session = require('../session')

module.exports = [{
  method: 'GET',
  path: '/grade',
  config: {
    handler: function (request, h) {
      return h.view('grade')
    }
  }
}, {
  method: 'POST',
  path: '/grade',
  config: {
    handler: async function (request, h) {
      const payload = request.payload

      const db = await session.merge({ grade: payload })

      return h.redirect('/objectives')
    },
    validate: {
      payload: {
        grade: joi.string().required()
      }
    }
  }
}]
