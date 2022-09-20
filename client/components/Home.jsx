import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const movies = useSelector((store) => store.movies)
  return (
    <>
      <h2>Home</h2>
      <div className="movies">
        {movies.map((movie) => {
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
