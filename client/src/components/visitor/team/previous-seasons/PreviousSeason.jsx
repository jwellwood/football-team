import React from 'react';
// MUITODO
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Components
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomIcon from 'components/ui/icons/CustomIcon';
import PresentationModal from 'components/ui/modals/PresentationModal';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import PreviousSeasonContent from './PreviousSeasonContent';
import CustomText from 'components/ui/text/CustomText';
import SectionContainer from 'containers/SectionContainer';

const PreviousSeasons = ({ season }) => {
  const { seasonName } = season;

  return (
    <SectionContainer title='Previous Seasons'>
      <PresentationModal
        buttonElement={
          <ListItemWrapper button noDivider>
            <CustomAvatar isList shadow='secondary'>
              <CustomIcon icon='monument' size='sm' color='secondary' />
            </CustomAvatar>
            <ListItemSecondaryAction>
              <CustomText type='highlight'>{seasonName}</CustomText>
            </ListItemSecondaryAction>
          </ListItemWrapper>
        }
      >
        <PreviousSeasonContent season={season} />
      </PresentationModal>
    </SectionContainer>
  );
};

export default PreviousSeasons;
