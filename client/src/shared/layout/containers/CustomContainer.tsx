import React from 'react';
import Container from '@material-ui/core/Container';

interface Props {
  children: React.ReactNode;
}

const CustomContainer: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth='sm' disableGutters>
      {children}
    </Container>
  );
};

export default CustomContainer;
