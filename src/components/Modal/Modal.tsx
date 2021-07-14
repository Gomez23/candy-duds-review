import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  toggler: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, toggler }) => {
  return (
    <>
      <div
        className="opacity-100 pointer-events-auto grid place-items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-500"
        onClick={toggler}
      >
        <div className="transform opacity-100 translate-y-0 w-1/2 my-6 mx-auto transition-all duration-500">
          <div
            data-testid="items-modal"
            className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
      <div className="opacity-25 pointer-events-auto fixed inset-0 z-40 bg-black transition-all duration-500" />
    </>
  );
};

export default Modal;
