let notes = []; // In-memory array to store notes
let nextId = 1; // Simple counter for unique numeric IDs

// Function to add a new note
const addNote = (title, content) => {
  const newNote = {
    id: nextId++,
    title,
    content,
    createdAt: new Date().toISOString(),
  };
  notes.push(newNote);
  return newNote;
};

// Function to get a note by ID
const getNoteById = (id) => {
  return notes.find(note => note.id === id);
};

// Function to update a note by ID
const updateNoteById = (id, title, content) => {
  const note = getNoteById(id);
  if (note) {
    note.title = title;
    note.content = content;
    return note;
  }
  return null;
};

// Function to delete a note by ID
const deleteNoteById = (id) => {
  const index = notes.findIndex(note => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  notes,
  addNote,
  getNoteById,
  updateNoteById,
  deleteNoteById,
};