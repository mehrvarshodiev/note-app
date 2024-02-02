import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { globalContext } from "../context/globalContext";
import randomColor from "randomcolor";

export const Note = (note) => {
  const [, , onChangeNote, onRemoveNote] = useContext(globalContext);
  const [noteColor, setNoteColor] = useState(
    randomColor({ format: "rgba", alpha: 0.4 })
  );

  useEffect(() => {
    setNoteColor(randomColor({ format: "rgba", alpha: 0.4 }));
  }, []);

  return (
    <div
      className={`w-[280px] h-[280px] overflow-hidden p-3 cursor-default shadow-md border border-slate-700 shadow-slate-900 rounded-md text-gray-700 relative after:transition-all after:ease-in-out after:duration-500 after:delay-300 after:px-5 after:content-['Double_click_to_remove_note'] after:inline-flex after:items-center after:font-medium after:text-[1rem] after:text-slate-800 after:bg-slate-200 after:bg-opacity-70 after:z-50 after:h-10 after:absolute after:left-0 after:bottom-[-40px] after:w-full hover:after:bottom-0`}
      onDoubleClick={() => onRemoveNote(note.id)}
      style={{
        background: noteColor,
      }}
    >
      <input
        autoFocus
        id={note.id}
        data-title="titleInput"
        className="text-[1.5rem] mb-3 max-w-[100%] px-2 py-1 bg-transparent text-slate-700 placeholder:text-slate-600 border-b border-slate-500 outline-none focus:border focus:rounded-md cursor-default focus-within:cursor-auto"
        placeholder="Title..."
        value={note.title}
        onChange={(e) => onChangeNote(e.target)}
      />
      <textarea
        id={note.id}
        data-desc="descInput"
        className="text-[1.3rem] px-2 py-1 bg-transparent text-slate-700 placeholder:text-slate-600  resize-none w-[100%] h-[10rem] outline-none focus:border focus:border-slate-500  focus:rounded-md cursor-default focus-within:cursor-auto"
        placeholder="Enter a description..."
        value={note.desc}
        onChange={(e) => onChangeNote(e.target)}
        spellCheck="false"
      ></textarea>
    </div>
  );
};
