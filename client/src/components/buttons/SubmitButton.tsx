import React from 'react';
import Button from '@material-ui/core/Button';
import { Spinner } from 'components/loaders';
import { makeStyles } from '@material-ui/core/styles';
import { button_text } from 'constants/text';

export const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

interface Props {
  children?: React.ReactNode;
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
      {children || button_text.SUBMIT}
    </Button>
  ) : (
    <Spinner isSecondary />
  );
};

export default SubmitButton;
