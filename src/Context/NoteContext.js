import { createContext } from "react";

const setCurrentNote = () => {};
const setisDetailShowed = () => {};
const setSearch = () => {};
const setNotes = () => {};
export const NotesContext = createContext(
  [],
  setNotes,
  setCurrentNote,
  setisDetailShowed,
  setSearch,
  "",
  {},
  false
);
