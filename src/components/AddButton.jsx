import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { globalContext } from "../context/globalContext";

export const AddButton = () => {
  const [_, onAddNote] = useContext(globalContext);
  return (
    <button
      type="button"
      title="add new note template"
      onClick={onAddNote}
      className="w-[280px] h-[280px] bg-white bg-opacity-20 text-slate-800 shadow-md backdrop-filter backdrop-blur-md border border-white border-opacity-50 shadow-slate-900 flex items-center justify-center rounded-md text-6xl transition-all duration-300 ease-in active:scale-95"
    >
      <FaPlus />
    </button>
  );
};
