import { useContext } from "react";
import { NotesContext } from "../../Context/NoteContext";
import Note from "./NoteCard/index";
export default function Notes() {
  const { notes, setNotes, setCurrentNote } = useContext(NotesContext);
  console.log(notes);
  return (
    <>
      {notes.map(({ id, title, description, createdAt, priority }, index) => (
        <Note
          key={index}
          title={title}
          description={description}
          createdAt={createdAt}
          priority={priority}
        />
      ))}
    </>
  );
}
