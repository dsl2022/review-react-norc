import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { NotesContext } from "../../../Context/NoteContext";
export default function Note({ id, title, description, createdAt, priority }) {
  const {
    setCurrentNote,
    currentNote,
    setisDetailShowed,
    notes,
    isDetailShowed,
  } = useContext(NotesContext);
  function handleModalOpen(e) {
    let id = parseInt(e.target.id);
    notes.forEach((note) => {
      if (note.id === id) {
        setCurrentNote(notes[id]);
      }
    });
    setisDetailShowed(true);
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{createdAt}</Card.Text>
        <Card.Text>{priority}</Card.Text>
        <Button id={id} onClick={handleModalOpen} variant="primary">
          View Detail
        </Button>
      </Card.Body>
    </Card>
  );
}
