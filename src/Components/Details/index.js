import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NotesContext } from "../../Context/NoteContext";
import Note from "../Notes/NoteCard";
export default function Example() {
  const { currentNote, isDetailShowed, setisDetailShowed } =
    useContext(NotesContext);
  const handleClose = () => setisDetailShowed(false);
  const handleShow = () => setisDetailShowed(true);
  return (
    <>
      <Modal show={isDetailShowed} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currentNote?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{currentNote?.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Edit
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);
