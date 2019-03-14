import { ModalBackground, ModalContent } from "../StyledComponents/Modal";
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContent>
        <h2>Modal Title</h2>
        <p>This is the modal content!</p>
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
