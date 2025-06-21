import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes, { all_notes } from "./notes";
import CreateArea from "./CreateArea";

function createNote(notes) {
  return <Note title={notes.title} content={notes.content} />;
}

function App() {
  const [notes, setNotes] = useState([...all_notes]);

  function addNote(newNote) {
    setNotes((prevnotes) => {
      return [...prevnotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevnotes) => {
      return prevnotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      <div className="container">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={()=>deleteNote(index)}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
