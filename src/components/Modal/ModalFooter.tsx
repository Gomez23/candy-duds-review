import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    border-top: 1px solid lightgray
`

const ModalFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledFooter className="pt-4 flex p-2 items-center justify-end gap-4">{children}</StyledFooter>
);

export default ModalFooter;
