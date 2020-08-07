import React, { ReactNode } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { theme } from 'shared/theme';
import Spinner from 'lib/components/loading/Spinner';
import CustomIcon from '../icons/CustomIcon';

interface Props {
  children: ReactNode;
  title: string;
  loading: boolean;
  onDelete: () => void;
  disabled?: boolean;
}

const DeleteModal: React.FC<Props> = ({
  children,
  title,
  loading,
  onDelete,
  disabled,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton color='secondary' onClick={handleClickOpen}>
        <CustomIcon icon='trash' size='xs' />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        PaperProps={{
          style: {
            background: 'rgba(0,0,0,0.9)',
            border: `3px solid ${theme.palette.primary.main}`,
          },
        }}
      >
        <DialogTitle id='form-dialog-title'>
          Permanently Delete {title}
        </DialogTitle>
        {!loading ? (
          <>
            {children}
            <DialogActions>
              <Button onClick={handleClose} color='secondary'>
                Cancel
              </Button>
              <Button
                type='submit'
                color='primary'
                onClick={onDelete}
                disabled={disabled}
              >
                Delete {title}
              </Button>
            </DialogActions>
          </>
        ) : (
          <Spinner isButton />
        )}
      </Dialog>
    </>
  );
};

export default DeleteModal;
