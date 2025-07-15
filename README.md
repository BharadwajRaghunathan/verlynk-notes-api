# Verlynk Notes API

A simple RESTful API for managing notes, built with **Node.js** and **Express**.  
This project was developed as part of the backend assignment for the Software Engineer Intern position at **Verlynk**.

---

## 📘 Project Overview

The **Verlynk Notes API** is a lightweight RESTful API designed to demonstrate core backend development skills.  
It enables users to perform CRUD (Create, Read, Update, Delete) operations on notes.

Key highlights:
- Built using **Node.js** with the **Express** framework.
- Uses **in-memory storage** (no database) for simplicity and focused scope.
- Implements essential backend principles: routing, middleware, validation, and error handling.
- Includes a comprehensive **Postman test suite** for validation.

---

## 🚀 Features

- **RESTful API Design**  
  - `GET /notes`
  - `GET /notes/:id`
  - `POST /notes`
  - `PUT /notes/:id`
  - `DELETE /notes/:id`

- **Node.js + Express** for clean routing and modular code.
- **In-Memory Storage** using a simple JavaScript array.
- **Robust Error Handling** for validation and edge cases.
- **Structured Codebase**: Follows MVC pattern for scalability.
- **Postman Test Suite** included for full API testing.

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript (ES6+)
- Postman (for testing)

---

## 📂 Project Structure

```
verlynk-notes-api/
│
├── src/
│   ├── app.js                        # Entry point of the app
│   ├── controllers/
│   │   └── notesController.js        # Business logic for note operations
│   ├── routes/
│   │   └── notesRoutes.js            # API route definitions
│   ├── models/
│   │   └── note.js                   # In-memory note model
│   ├── utils/
│   │   └── helpers.js                # Utility functions (placeholder)
│   └── postman-testcase/
│       └── verlynk-notes-api-tests.json  # Postman collection for testing
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/BharadwajRaghunathan/verlynk-notes-api.git

# Navigate into the project directory
cd verlynk-notes-api

# Install dependencies
npm install
```

### 🚀 Running the Server

```bash
# Start the server
npm start
```

Server will be running at: `http://localhost:3000`

For development mode with auto-reloading:

```bash
npm run dev
```

---

## 📡 API Endpoints

Base path: `/notes`

### 1. `GET /notes`

Retrieve all notes.

- **Request Body:** None  
- **Response:**  
  - `200 OK`: Array of notes

```json
[
  {
    "id": 1,
    "title": "Sample Note",
    "content": "This is a sample note.",
    "createdAt": "2025-07-15T12:00:00.000Z"
  }
]
```

---

### 2. `GET /notes/:id`

Retrieve a specific note by ID.

- **Request Body:** None  
- **Response:**
  - `200 OK`: The note object
  - `404 Not Found`: `{ "error": "Note not found" }`

---

### 3. `POST /notes`

Create a new note.

- **Request Body:**  
  ```json
  {
    "title": "New Note",
    "content": "Note content here"
  }
  ```

- **Response:**
  - `201 Created`: The created note
  - `400 Bad Request`: `{ "error": "Title and content are required" }`

---

### 4. `PUT /notes/:id`

Update an existing note.

- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "content": "Updated content"
  }
  ```

- **Response:**
  - `200 OK`: The updated note
  - `400 Bad Request`: `{ "error": "Title and content are required" }`
  - `404 Not Found`: `{ "error": "Note not found" }`

---

### 5. `DELETE /notes/:id`

Delete a note by ID.

- **Request Body:** None  
- **Response:**
  - `200 OK`: `{ "message": "Note deleted successfully" }`
  - `404 Not Found`: `{ "error": "Note not found" }`

---

## 🧠 Data Storage

- Notes are stored in an **in-memory array**.
- Data will be **lost on server restart**.
- Each note contains: `id`, `title`, `content`, `createdAt`.

---

## ✅ Testing

A **Postman collection** is included to test all API endpoints.

### 🔬 How to Test:

1. **Start the server** using the instructions above.
2. Open **Postman** and import `src/postman-testcase/verlynk-notes-api-tests.json`.
3. Run the tests using Postman's Collection Runner.

### 🧪 Test Cases Include:

- `GET /notes` (empty & after creation)
- `POST /notes` (valid & invalid input)
- `GET /notes/:id` (existing & non-existent)
- `PUT /notes/:id` (existing & non-existent)
- `DELETE /notes/:id` (existing & non-existent)

---

## 📌 Additional Notes

- **Authentication:** Not included (not required for this assignment).
- **ID Generation:** Simple counter-based auto-increment.
- **Timestamps:** Generated using `new Date().toISOString()`.
- **License:** ISC License

---

## 📄 License

This project is licensed under the **ISC License**.  
Feel free to use and modify for learning purposes.

---

## 🙌 Acknowledgements

Thanks to **Verlynk** for the opportunity to showcase backend skills through this assignment.
