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
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <SearchInput />
      </div>
    </div>
  );
};

export default Day13;
