import React from 'react';

const ModalBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative flex-auto mb-6">{children}</div>
);

export default ModalBody;
