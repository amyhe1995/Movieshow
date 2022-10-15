import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Home from './Home'
import AddMovie from './AddMovie'
import MovieDetails from './MovieDetails'

import { getTheMovies } from '../actions/movies'

function App() {
  const dispatch = useDispatch()
  dispatch(getTheMovies())

  return (
    <>
      <header className="header">
        <h1>The flicks</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/add">Add Movie</Link>
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/add" element={<AddMovie />} />
        </Routes>
      </section>
    </>
  )
}

export default App
