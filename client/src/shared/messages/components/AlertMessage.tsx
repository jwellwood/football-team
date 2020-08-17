import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showAlert } from 'reduxStore/alert';
// MUI
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { IAlert } from '../shared';
import { AppDispatch } from 'reduxStore/rootReducer';

interface IAlertState {
  alert: any;
}

const AlertMessage: React.FC = () => {
  const message: IAlert = useSelector((state: IAlertState) => state.alert);
  const dispatch: AppDispatch = useDispatch();

  const handleClose = () => {
    dispatch(showAlert(false, '', 'warning'));
  };

  return message ? (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={message ? message.open : false}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={message.type}>
        {message.text}
      </Alert>
    </Snackbar>
  ) : null;
};

export default AlertMessage;
