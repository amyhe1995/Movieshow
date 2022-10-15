import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const movies = useSelector((store) => store.movies)

  const unwatched = movies.filter((movie) => !movie.watched)
  const watched = movies.filter((movie) => movie.watched)

  return (
    <>
      <h2>Home</h2>
      <h3>Movies to watch:</h3>
      <div className="movies">
        {unwatched.map((movie) => {
          return (
            <div key={movie.id} className="movie__tile">
              <img src={movie.img} />
              <p>{movie.title}</p>
            </div>
          )
        })}
      </div>

      <h3>Cool movies I have seen:</h3>
      <div className="movies">
        {watched.map((movie) => {
          return (
            <div key={movie.id} className="movie__tile">
              <img src={movie.img} />
              <p>{movie.title}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
