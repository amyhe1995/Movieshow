const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GET - /api/v1/movies
router.get('/', async (req, res) => {
  try {
    const moviesArr = await db.getAllMovies()
    res.json(moviesArr)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

// POST
router.post('/', async (req, res) => {
  try {
    const idArr = await db.insertMovie(req.body)

    const newObj = {
      id: idArr[0],
      ...req.body,
      watched: false,
    }

    res.json(newObj)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

// PATCH
// DELETE

module.exports = router
