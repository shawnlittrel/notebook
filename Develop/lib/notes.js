const fs = require('fs');
const path = require('path');


//When I click save icon, the note is saved and it populates in the left-hand container
function saveNotes(body, db){
     const noteBody = body;

     db.push(noteBody);
     fs.writeFileSync(
          path.join(__dirname, '../db/db.json'),
          JSON.stringify({ notes: db }, null ,2)
     );
     return noteBody;
};

function validateNote(note) {
     if(!note.title) {
          return false;
     }
     if(!note.text) {
          return false;
     }
     return true;
};

//find object based on ID for deletion
function findById(id, notesArray) {
     const result = notesArray.filter(notes => notes.id === id)[0];
     return result;
}

function deleteNote(id) {
     let deletedNote = notesArray.findIndex(id)
     console.log(deletedNote);
}

module.exports = {
                    saveNotes,
                    validateNote,
                    findById,
                    deleteNote
                    }