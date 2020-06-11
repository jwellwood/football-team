import React from 'react';
// MUITODO
import Grid from '@material-ui/core/Grid';
// Functions
import { parseDate } from 'components/utils/date';
import { getResultsColors } from 'components/utils';
// assets
import badge from 'assets/images/badge.jpg';
// Components
import CustomIcon from 'components/ui/icons/CustomIcon';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import TopSectionContainer from 'containers/TopSectionContainer';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import CustomImageAvatar from 'components/ui/avatars/CustomImageAvatar';
import ValueText from 'components/ui/text/ValueText';
import CustomText from 'components/ui/text/CustomText';

const ScoreBox = ({ result }) => {
  const {
    opponentName,
    teamGoals,
    opponentGoals,
    isHome,
    date,
    type,
    points,
  } = result;

  const data = {
    score: [teamGoals, opponentGoals],
    name: ['Madrid Reds', opponentName],
  };

  const GridWrapper = ({ children }) => {
    return (
      <Grid item xs={4} align='center'>
        <CenteredGrid items='flex-start'>{children}</CenteredGrid>
      </Grid>
    );
  };

  const NumberWrapper = ({ children }) => {
    return (
      <CustomText type='large' color='inherit'>
        {children}
      </CustomText>
    );
  };

  const teamBadge = <CustomImageAvatar image={badge} shadow='secondary' />;

  const oppBadge = (
    <CustomAvatar shadow='secondary'>
      <CustomIcon icon='shield-alt' size='sm' />
    </CustomAvatar>
  );

  const teamName = (team) => (
    <GridWrapper>
      <ValueText>{team}</ValueText>
    </GridWrapper>
  );

  const score = (
    <Grid
      item
      xs={4}
      align='center'
      style={{ color: getResultsColors(points) }}
    >
      <NumberWrapper>{data.score[isHome ? 0 : 1]}</NumberWrapper>
      <span> - </span>
      <NumberWrapper>{data.score[isHome ? 1 : 0]}</NumberWrapper>
    </Grid>
  );

  const homeTeam = (
    <GridWrapper>
      {isHome ? teamBadge : oppBadge}
      {teamName(data.name[isHome ? 0 : 1])}
    </GridWrapper>
  );

  const awayTeam = (
    <GridWrapper>
      {isHome ? oppBadge : teamBadge}
      {teamName(data.name[isHome ? 1 : 0])}
    </GridWrapper>
  );

  const details = (
    <CenteredGrid>
      <CustomText type='highlight'>{type}</CustomText>
      <CustomText type='caption'>{parseDate(date)}</CustomText>
    </CenteredGrid>
  );

  return (
    <TopSectionContainer>
      <CenteredGrid item='flex-start' dir='row'>
        {homeTeam}
        {score}
        {awayTeam}
      </CenteredGrid>
      {details}
    </TopSectionContainer>
  );
};

export default ScoreBox;
