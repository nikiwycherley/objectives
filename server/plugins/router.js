const routes = [].concat(
  require('../routes/home'),
  require('../routes/about'),
  require('../routes/lineManager'),
  require('../routes/public'),
  require('../routes/name'),
  require('../routes/next'),
  require('../routes/grade'),
  require('../routes/objectives'),
  require('../routes/development'),
  require('../routes/summary'),
  require('../routes/jobTitle')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
