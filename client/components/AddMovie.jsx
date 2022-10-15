import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addAMovie } from '../actions/movies'
import { searchForMovie } from '../apis/imdb'

function AddMovie() {
  const [movieSearch, setMovieSearch] = useState('')
  const [results, setResults] = useState([])

  const dispatch = useDispatch()

  const handleSearch = async (evt) => {
    evt.preventDefault()
    const searchResults = await searchForMovie(movieSearch)
    setResults(searchResults)
    setMovieSearch('')
  }

  const handleTyping = (evt) => {
    setMovieSearch(evt.target.value)
  }

  const handleAdd = (movie) => {
    dispatch(addAMovie(movie))
  }

  return (
    <>
      <h2>AddMovie</h2>

      <form onSubmit={handleSearch}>
        <label htmlFor="search">New movie:</label>
        <input
          type="text"
          id="search"
          onChange={handleTyping}
          value={movieSearch}
        />
        <button>Search</button>
      </form>

      {results.map((movie) => (
        <div key={movie.id} className="result">
          <img src={movie.image} width="200px" />
          <p>{movie.title}</p>
          <button onClick={() => handleAdd(movie)}>Save</button>
        </div>
      ))}
    </>
  )
}

export default AddMovie
