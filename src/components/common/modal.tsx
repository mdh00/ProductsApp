import React, {ReactNode} from 'react';

interface ModalProps {
  closeModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-modal" onClick={closeModal}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
