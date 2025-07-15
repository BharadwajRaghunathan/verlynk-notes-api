const express = require('express');
const {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require('../controllers/notesController');

const router = express.Router();

// GET all notes
router.get('/', getAllNotes);

// GET a specific note by ID
router.get('/:id', getNote);

// POST a new note
router.post('/', createNote);

// PUT update a note by ID
router.put('/:id', updateNote);

// DELETE a note by ID
router.delete('/:id', deleteNote);

module.exports = router;