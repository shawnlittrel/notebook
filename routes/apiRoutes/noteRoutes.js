const { notes } = require('../../db/db.json');
const { saveNotes, validateNote, findById, deleteNote } = require('../../lib/notes.js');
const router = require('express').Router();
const { default: ShortUniqueId } = require('short-unique-id');
const idNumber = new ShortUniqueId();
router.get('/notes', (req, res) => {
     let results = notes;

     res.json(results);
});

router.post('/notes', (req, res) => {
     //generate unique ID for each entry and append to object
     req.body.id = idNumber();
     //only accept if all fields are populated
     if(!validateNote(req.body)) {
          res.status(400).send("Each note needs a title and text.");
     } else {
          const note = saveNotes(req.body, notes);
          res.json(note);
     }
});

router.post('/notes/:id', (req, res) => {
     const result = findById(req.params.id, notes);

     if (result) {
          res.json(result);
     } else {
          res.sendStatus('Error: ' + statusText)
     }
})

router.delete('/notes/:id', (req, res) => {
     const result = deleteNote(req.params.id, notes);
          res.json(result);
     }
);

module.exports = router;