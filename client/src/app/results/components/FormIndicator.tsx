import React from 'react';
import Typography from '@material-ui/core/Typography';
import { getThemeColorByNumber } from 'utils';

interface Props {
  pointsArray: number[];
}

const getResultSymbol = (points: number) => {
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
    {pointsArray.map((res, i: number) => (
      <Typography
        key={i}
        component='span'
        style={{
          color: getThemeColorByNumber(res),
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
