import { IoIosCloseCircle } from "react-icons/io";

const Modal = ({ setOpenModal }) => {
  function closeModal(e) {
    if (e.target.id === "modal-container") {
      setOpenModal(false);
    }
  }
  return (
    <main className="modal" id="modal-container" onClick={closeModal}>
      <div className="modal-div" id="modal-div">
        <div className="modal-title">
          <span>Hello Its Me</span>
          <IoIosCloseCircle size={30} onClick={() => setOpenModal(false)} />
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
