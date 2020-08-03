import React from 'react';
//MUI
import Button from '@material-ui/core/Button';
import { useStyles } from '../../../components/ui/buttons/styles'; // Styles
import Spinner from '../../../components/ui/loading/Spinner';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

const SubmitButton: React.FC<Props> = ({ children, disabled, loading }) => {
  const classes = useStyles();
  return !loading ? (
    <Button
      type='submit'
      fullWidth
      variant='contained'
      color='primary'
      className={classes.button}
      disabled={disabled}
    >
      {children || 'Submit'}
    </Button>
  ) : (
    <Spinner isButton />
  );
};

export default SubmitButton;
