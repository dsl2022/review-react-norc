import { createContext } from "react";

const setCurrentNote = () => {};
const setisDetailShowed = () => {};
const setSearch = () => {};
const setNotes = () => {};
export const NotesContext = createContext({
  notes: [],
  setNotes,
  setCurrentNote,
  setisDetailShowed,
  setSearch,
  search: "",
  currentNote: {},
  isDetailShowed: false,
  ref: "",
});
