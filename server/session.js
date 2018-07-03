const db = {}

module.exports = {
  merge: function (data) {
    Object.assign(db, data)
    Promise.resolve(db)
  },
  get: function () {
    return Promise.resolve(db)
  }
}
