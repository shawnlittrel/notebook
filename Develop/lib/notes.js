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
    notesArray.filter(notes => notes.id === id)[0];
}

function deleteNote(id, notesArray) {
          //on click, find id of clicked note
          let selectedObj = findById(id, notesArray);
          //find index of element with matching id
          let indexOfObj = notesArray.indexOf(selectedObj);
          //delete index from array
          newNotesArray = notesArray.splice(indexOfObj, 1);

          fs.writeFileSync(
               path.join(__dirname, '../db/db.json'),
               JSON.stringify({ notes: newNotesArray }, null, 2)
               )
          
}

module.exports = {
                    saveNotes,
                    validateNote,
                    findById,
                    deleteNote
                    }