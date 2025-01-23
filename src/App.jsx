import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import SearchInput from "./components/SearchInput";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className="container">
      {/* <button onClick={() => setOpenModal(true)} className="open-modal-btn">
        Open Modal
      </button>
      {openModal && <Modal setOpenModal={setOpenModal} />} */}
      <SearchInput />
    </main>
  );
}

export default App;
