import { IoIosCloseCircle } from "react-icons/io";
import "./modal.css";
import { useState } from "react";

const Modal = ({ setOpenModal }) => {
  const [isExiting, setIsExiting] = useState(false);
  function closeModal(e) {
    if (e.target.id === "modal-container") {
      setOpenModal(false);
    }
  }

  function handleClose() {
    setIsExiting(true);
    setTimeout(() => setOpenModal(false), 1000);
  }

  return (
    <main
      className={`modal ${isExiting ? "exit" : ""}`}
      id="modal-container"
      onClick={closeModal}
    >
      <div
        className={`modal-div ${isExiting ? "exit" : "enter"}`}
        id="modal-div"
      >
        <div className="modal-title">
          <span>Hello Its Me</span>
          <IoIosCloseCircle size={30} onClick={handleClose} />
        </div>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi
          aspernatur quasi nihil laudantium non quis, nemo obcaecati tenetur
          quos minus ratione inventore ex. Adipisci assumenda, quo excepturi
          neque voluptatem consequuntur. Autem nam officia ea beatae culpa
          necessitatibus recusandae molestiae consequuntur et? Quos, vero hic.
        </span>
      </div>
    </main>
  );
};

export default Modal;
