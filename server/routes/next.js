const joi = require('joi')
const session = require('../session')

module.exports = [{
  method: 'GET',
  path: '/next',
  config: {
    handler: function (request, h) {
      return h.view('next')
    }
  }
}, {
  method: 'POST',
  path: '/next',
  config: {
    handler: async function (request, h) {
      // do something
      const payload = request.payload
      // const firstName = payload.firstName
      // const lastName = payload.lastName

      const db = await session.merge({ name: payload })

      return h.redirect('/next')
    }
  }
}]
