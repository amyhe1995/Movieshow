import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addAMovie } from '../actions/movies'
import { searchForMovie } from '../apis/imdb'

function AddMovie() {
  const alreadyAddedIds = useSelector((store) =>
    store.movies.map((movie) => movie.imdb_id)
  )
  const [movieSearch, setMovieSearch] = useState('')
  const [results, setResults] = useState([])

  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    navigate('/')
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
          <button
            onClick={() => handleAdd(movie)}
            disabled={alreadyAddedIds.includes(movie.id)}
          >
            Save
          </button>
        </div>
      ))}
    </>
  )
}

export default AddMovie
