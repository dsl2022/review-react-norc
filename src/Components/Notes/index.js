import { useContext } from "react";
import { NotesContext } from "../../Context/NoteContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Note from "./NoteCard/index";
export default function Notes() {
  const { notes, setNotes, setCurrentNote } = useContext(NotesContext);
  console.log(notes);
  return (
    <Container>
      <Row>
        {notes.map(({ id, title, description, createdAt, priority }, index) => (
          <Col sm={6} style={{ marginTop: 20 }}>
            <Note
              key={index}
              title={title}
              description={description}
              createdAt={createdAt}
              priority={priority}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
