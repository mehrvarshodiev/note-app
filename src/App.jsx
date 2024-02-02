import React, { useEffect, useMemo, useState } from "react";
import { Layout } from "./components/Layout";
import { globalContext } from "./context/globalContext";

export const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  function onAddNote() {
    const newNote = {
      id: new Date().getTime(),
      title: "",
      desc: "",
    };
    notes.push(newNote);
    setNotes([...notes]);
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  function onChangeNote(currentElement) {
    notes.map((note) => {
      if (note.id == currentElement.id) {
        if (currentElement.dataset.title == "titleInput") {
          note.title = currentElement.value;
        } else if (currentElement.dataset.desc == "descInput") {
          note.desc = currentElement.value;
        }
      }
    });
    setNotes([...notes]);
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  function onRemoveNote(id) {
    const newNotes = notes.filter((note) => note.id != id);
    console.log(newNotes);
    setNotes([...newNotes]);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  return (
    <globalContext.Provider
      value={[notes, onAddNote, onChangeNote, onRemoveNote]}
    >
      <div className="container-fluid mx-auto min-h-screen p-14 max-[310px]:p-6 max-[280px]:p-3 bg-gradient-to-bl from-slate-200 via-gray-100 to-slate-200">
        <Layout />
      </div>
    </globalContext.Provider>
  );
};
