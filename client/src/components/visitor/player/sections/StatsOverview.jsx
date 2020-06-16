import React from 'react';
// MUITODO
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Internal
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import StatIcon from 'components/ui/icons/StatIcon';
import SectionContainer from 'containers/SectionContainer';
import CustomTypography from 'components/ui/text/CustomTypography';

const StatsOverview = ({ data }) => {
  return (
    <SectionContainer title='Stats'>
      <ListWrapper dense>
        {data.map((item) => (
          <ListItemWrapper key={item.text} noDivider={item.noDivider}>
            {item.icon ? (
              <ListItemIcon>
                <StatIcon type={item.icon} size='lg' />
              </ListItemIcon>
            ) : null}
            <ListItemText primary={item.text} secondary={item.secondary} />
            <ListItemSecondaryAction>
              <CustomTypography main bold>
                {item.value}
              </CustomTypography>
            </ListItemSecondaryAction>
          </ListItemWrapper>
        ))}
      </ListWrapper>
    </SectionContainer>
  );
};

export default StatsOverview;
