import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Note from "./Note";
import "./notify-styles.css";

function Notify() {
  let [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="notify-area">
      <div className="notify-head">
        <h1>Notify</h1>
        <p>
          This application shows the main feature of React, rendering components
          based on user input. I work with useState, props and spread operator.
          Also I implemented material ui for this application. 
        </p>
      </div>
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Notify;
