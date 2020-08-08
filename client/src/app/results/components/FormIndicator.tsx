import React from 'react';
import Typography from '@material-ui/core/Typography';
import { getResultsColors } from 'utils/colors';

interface Props {
  pointsArray: number[];
}

const getResultSymbol = (points) => {
  switch (points) {
    case 3:
      return 'W';
    case 1:
      return 'D';
    case 0:
      return 'L';
    default:
      return '?';
  }
};

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
