import React from 'react';

interface ModalHeaderProps {
  children: React.ReactNode;
  toggler: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ children, toggler }) => {
  return (
    <div className="flex items-center mt-4 justify-center mb-6">
      <h5 className="text-gray-900 text-2xl font-bold mt-0 mb-0">{children}</h5>
      <button
        className="p-1 bg-transparent absolute top-1 right-4 text-gray-900 text-3xl leading-none outline-none focus:outline-none"
        onClick={toggler}
        data-testid="close-button"
      >
        <span className="text-gray-900 text-3xl block">&times;</span>
      </button>
    </div>
  );
};

export default ModalHeader;
