import Container from "react-bootstrap/Container";
import "./App.css";
import { NotesContext } from "./Context/NoteContext";
import { data } from "./Model/data";
import Detail from "./Components/Details";
import Notes from "./Components/Notes";
import Search from "./Components/Search";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState(data);
  const [search, setSearch] = useState("");
  const [currentNote, setCurrentNote] = useState({});
  const [isDetailShowed, setisDetailShowed] = useState(false);
  return (
    <div className="App">
      <NotesContext.Provider
        value={{
          notes,
          setNotes,
          setCurrentNote,
          setisDetailShowed,
          setSearch,
          search,
          currentNote,
          isDetailShowed,
        }}
      >
        <Container>
          {isDetailShowed && <Detail />}
          <Search />
          <Notes />
        </Container>
      </NotesContext.Provider>
    </div>
  );
}

export default App;
