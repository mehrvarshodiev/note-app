import React from "react";
import { AddButton } from "./AddButton";
import { Notes } from "./Notes";

export const Layout = () => {
  return (
    <div className="flex flex-wrap gap-10 mx-auto justify-center min-[850px]:justify-start">
      <AddButton />
      <Notes />
    </div>
  );
};
