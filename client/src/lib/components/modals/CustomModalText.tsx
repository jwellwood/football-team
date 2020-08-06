import React from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';

interface Props {
  children: React.ReactNode;
}

const CustomModalText: React.FC<Props> = ({ children }) => {
  return (
    <DialogContent>
      <DialogContentText>{children}</DialogContentText>
    </DialogContent>
  );
};

export default CustomModalText;
