import React from 'react';
import Container from '@material-ui/core/Container';

const CustomContainer = ({ children }) => {
  return (
    <Container maxWidth='sm' disableGutters>
      {children}
    </Container>
  );
};

export default CustomContainer;
