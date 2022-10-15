const conn = require('./connection')

function getAllMovies(db = conn) {
  return db('movies')
}

function insertMovie(newMovie, db = conn) {
  return db('movies').insert(newMovie)
}

module.exports = {
  getAllMovies,
  insertMovie,
}
