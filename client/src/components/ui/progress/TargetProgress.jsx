import React from 'react';
import { theme } from 'assets/theme';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TargetProgress = ({ percentage, children }) => {
  return (
    <CircularProgressbarWithChildren
      value={percentage}
      strokeWidth={10}
      // text={`${percentage}%`}
      styles={buildStyles({
        // Rotation of path and trail, in number of turns (0-1)
        rotation: 1,
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'round',
        // Text size
        // textSize: '16px',

        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 3,

        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',

        // Colors
        pathColor: theme.palette.success.light,
        // textColor: '#333',
        trailColor: theme.palette.warning.light,
      })}
    >
      {children}
    </CircularProgressbarWithChildren>
  );
};

export default TargetProgress;
