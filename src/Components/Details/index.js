import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NotesContext } from "../../Context/NoteContext";
import Note from "../Notes/NoteCard";
export default function Example() {
  //   const [show, setShow] = useState(false);
  const { isDetailShowed, setisDetailShowed } = useContext(NotesContext);
  const handleClose = () => setisDetailShowed(false);
  const handleShow = () => setisDetailShowed(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={isDetailShowed} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);
