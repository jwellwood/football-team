import React from 'react';
import Typography from '@material-ui/core/Typography';
import { getResultSymbol } from 'functions/results';
import { getResultsColors } from 'shared/utils/colors';

interface Props {
  pointsArray: number[];
}

const FormIndicator: React.FC<Props> = ({ pointsArray }) => (
  <>
    {pointsArray.map((res, i) => (
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
    ))}
  </>
);

export default FormIndicator;
