const Joi = require('joi')
const config = require('../../config')
// const schema = require('../schema')
const session = require('../session')

/*
* Add an `onPreResponse` listener to debug session
*/

module.exports = {
  plugin: {
    name: 'debug',
    register: (server, options) => {
      server.ext('onPreResponse', async (request, h) => {
        const response = request.response

        if (config.DEBUG) {
          if (response.variety === 'view') {
            const state = await session.get()
            // const result = Joi.validate(state, schema, { abortEarly: false })

            if (!response.source.context) {
              response.source.context = {}
            }
            response.source.context.DEBUG = {
              state: `${JSON.stringify(state, null, 2)}`
              // errors: `${JSON.stringify(result.error, null, 2)}`
            }
          }
        }

        return h.continue
      })
    }
  }
}
