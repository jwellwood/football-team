import React from 'react';
// MUITODO
import Typography from '@material-ui/core/Typography';
// Functions
import { getResultSymbol } from 'functions/results';
import { getResultsColors } from 'shared/utils/colors';

const FormIndicator = ({ data }) => {
  return data.map((res, i) => (
    <Typography
      key={i}
      component='span'
      style={{
        color: getResultsColors(res),
        fontWeight: 'bold',
        margin: '2px',
      }}
    >
      {getResultSymbol(res)}
    </Typography>
  ));
};

export default FormIndicator;
