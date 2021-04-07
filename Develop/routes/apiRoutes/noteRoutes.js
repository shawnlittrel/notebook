const { notes } = require('../../db/db.json');

const { saveNotes, validateNote } = require('../../lib/notes.js');

const router = require('express').Router();

router.get('/notes', (req, res) => {
     let results = notes;

     res.json(results);
});

router.post('/notes', (req, res) => {
     req.body.id = notes.length.toString();

     if(!validateNote(req.body)) {
          res.status(400).send("Each note needs a title and text.");
     } else {
          const note = saveNotes(req.body, notes);
          res.json(note);
     }
});

module.exports = router;