import request from 'superagent'

export function fetchAllMovies() {
  return request.get('/api/v1/movies').then((res) => {
    // console.log('fetch result', res.body)
    return res.body
  })
}

export function postMovie(movie) {
  return request
    .post('/api/v1/movies')
    .send(movie)
    .then((res) => {
      // console.log('RESPONSE', res.body)
      return res.body
    })
}
