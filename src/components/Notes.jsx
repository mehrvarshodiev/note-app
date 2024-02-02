import React, { useContext, useState } from "react";
import { globalContext } from "../context/globalContext";
import { Note } from "./Note";

export const Notes = () => {
  let [notes] = useContext(globalContext);
  return (
    <>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </>
  );
};
