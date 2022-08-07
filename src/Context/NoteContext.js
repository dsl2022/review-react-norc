import { createContext } from "react";

const setCurrentNote = () => {};
const setisDetailShowed = () => {};
const setSearch = () => {};

export const NotesContext = createContext(
  [],
  setCurrentNote,
  setisDetailShowed,
  setSearch,
  "",
  {},
  false
);
