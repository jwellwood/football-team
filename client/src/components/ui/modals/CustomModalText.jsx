import React from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';

const CustomModalText = ({ children }) => {
  return (
    <DialogContent>
      <DialogContentText>{children}</DialogContentText>
    </DialogContent>
  );
};

export default CustomModalText;
