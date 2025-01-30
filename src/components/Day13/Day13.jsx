import { useState } from "react";
import Modal from "./Modal";
import SearchInput from "./SearchInput";

const Day13 = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button onClick={() => setOpenModal(true)} className="open-modal-btn">
        Open Modal
      </button>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <SearchInput />
    </div>
  );
};

export default Day13;
