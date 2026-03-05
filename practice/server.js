// =============================================================================
// practice/server.js — Node.js Practice Sandbox
// =============================================================================
//
// PURPOSE
// -------
// This file is your hands-on playground for practising core Git/GitHub
// collaboration workflows:
//   1. Feature branching
//   2. Intentional merge conflicts
//   3. Pull Requests and code review
//
// EXERCISE 1 — Feature Branch Workflow
// -------------------------------------
// a) Create a new branch from main:
//      git checkout -b feature/add-greet-route
// b) Add a new Express route below the existing ones (e.g., GET /greet).
// c) Stage and commit:
//      git add practice/server.js
//      git commit -m "feat: add /greet route to server.js"
// d) Push and open a Pull Request against main.
//
// EXERCISE 2 — Intentional Merge Conflict
// ----------------------------------------
// a) Stay on your feature branch and change the PORT value to 4000.
// b) Switch back to main and change the PORT value to 5000, then commit.
//      git checkout main
//      # edit PORT → 5000
//      git add practice/server.js && git commit -m "chore: change port to 5000"
// c) Merge your feature branch into main:
//      git merge feature/add-greet-route
// d) Git will report a CONFLICT. Open this file, look for the
//    conflict markers (<<<<<<, =======, >>>>>>>) and resolve them manually.
// e) After resolving, stage and complete the merge:
//      git add practice/server.js
//      git commit -m "fix: resolve merge conflict in server.js"
//
// =============================================================================

'use strict';

// ---------------------------------------------------------------------------
// Dependencies — run `npm install express` before starting the server.
// ---------------------------------------------------------------------------
const express = require('express');

const app = express();

// ---------------------------------------------------------------------------
// Configuration
// EXERCISE 2 TIP: This is the value to change on each branch to create a
// conflict that Git cannot auto-resolve.
// ---------------------------------------------------------------------------
const PORT = 3000;

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------
app.use(express.json());

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

// GET / — Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Welcome to the GitHub Foundations practice server!' });
});

// GET /hello — Simple greeting
// EXERCISE 1 TIP: Add your new route (e.g., GET /greet) directly below this one.
app.get('/hello', (req, res) => {
  res.json({ greeting: 'Hello, world!' });
});

// ---------------------------------------------------------------------------
// ✏️  ADD YOUR NEW ROUTE HERE during Exercise 1
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Start server
// ---------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app; // export for testing
