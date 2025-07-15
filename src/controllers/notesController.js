const { notes, addNote, getNoteById, updateNoteById, deleteNoteById } = require('../models/note');

// GET all notes
const getAllNotes = (req, res) => {
  res.status(200).json(notes);
};

// GET a specific note by ID
const getNote = (req, res) => {
  const id = parseInt(req.params.id);
  const note = getNoteById(id);
  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }
  res.status(200).json(note);
};

// POST a new note
const createNote = (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  const newNote = addNote(title, content);
  res.status(201).json(newNote);
};

// PUT update a note by ID
const updateNote = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  const updatedNote = updateNoteById(id, title, content);
  if (!updatedNote) {
    return res.status(404).json({ error: 'Note not found' });
  }
  res.status(200).json(updatedNote);
};

// DELETE a note by ID
const deleteNote = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = deleteNoteById(id);
  if (!deleted) {
    return res.status(404).json({ error: 'Note not found' });
  }
  res.status(200).json({ message: 'Note deleted successfully' });
};

module.exports = {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};