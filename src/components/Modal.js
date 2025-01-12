import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Вы уверены, что хотите удалить задачу?</p>
        <button onClick={onConfirm}>Да</button>
        <button onClick={onClose}>Нет</button>
      </div>
    </div>
  );
};

export default Modal;
