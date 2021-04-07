const fs = require('fs');
const path = require('path');

//What functionality do we need to have
//Existing notes (db.json) populate on left hand container
function displayNotes(){};


//When I enter a new note title and text, Save icon appears at the top of the page
     //This is included with the starter code

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
//When I click write icon, I am presented with emply fields to enter new note title and text
function promptNewNote(){};

module.exports = {
                    saveNotes,
                    validateNote
                    }