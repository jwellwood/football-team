import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// Internal
import { theme } from 'shared/theme';
import SectionBackground from 'shared/layout/SectionBackground';
import GridItem from '../grids/GridItem';
import CustomTypography from '../text/CustomTypography';

const TargetProgress = ({ percentage, total, target, type }) => {
  return (
    <GridItem xs={4} sm={4} md={3} lg={2} xl={2}>
      <SectionBackground>
        <CircularProgressbarWithChildren
          value={percentage}
          strokeWidth={10}
          // text={`${percentage}%`}
          styles={buildStyles({
            rotation: 1,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
            pathTransitionDuration: 10,
            pathColor: theme.palette.success.light,
            trailColor: theme.palette.warning.light,
          })}
        >
          <CustomTypography main bold>
            {percentage} <CustomTypography size='sm'>%</CustomTypography>
          </CustomTypography>
        </CircularProgressbarWithChildren>
        {total || target ? (
          <>
            <CustomTypography main>{total}</CustomTypography>
            <CustomTypography> / {target}</CustomTypography>
          </>
        ) : null}
        {type ? (
          <CustomTypography size='sm' div>
            {type}
          </CustomTypography>
        ) : null}
      </SectionBackground>
    </GridItem>
  );
};

export default TargetProgress;
