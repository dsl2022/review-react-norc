import { useContext } from "react";
import { NotesContext } from "../../Context/NoteContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Note from "./NoteCard/index";
export default function Notes() {
  const { notes } = useContext(NotesContext);
  return (
    <Container>
      <Row>
        {notes.map(({ id, title, description, createdAt, priority }, index) => (
          <Col sm={6} style={{ marginTop: 20 }}>
            <Note
              key={index}
              id={id}
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
