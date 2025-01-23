import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className="container">
      <button onClick={() => setOpenModal(true)} className="open-modal-btn">
        Open Modal
      </button>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </main>
  );
}

export default App;
