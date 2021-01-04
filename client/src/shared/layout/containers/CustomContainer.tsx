import React, { ReactNode } from 'react';
import Container from '@material-ui/core/Container';

interface Props {
  children: ReactNode;
}

const CustomContainer: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth='sm' disableGutters>
      {children}
    </Container>
  );
};

export default CustomContainer;
