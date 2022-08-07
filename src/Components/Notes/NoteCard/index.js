import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { NotesContext } from "../../../Context/NoteContext";
export default function Note({ title, description, createdAt, priority }) {
  const { setisDetailShowed, isDetailShowed } = useContext(NotesContext);
  function handleModalOpen() {
    setisDetailShowed(true);
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{createdAt}</Card.Text>
        <Card.Text>{priority}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button onClick={handleModalOpen} variant="primary">
          View Detail
        </Button>
      </Card.Body>
    </Card>
  );
}
