const conn = require('./connection')

function getAllMovies(db = conn) {
  return db('movies')
}

module.exports = {
  getAllMovies,
}
