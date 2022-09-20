import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import AddMovie from './AddMovie'
import MovieDetails from './MovieDetails'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
        <h1>The flicks</h1>
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
