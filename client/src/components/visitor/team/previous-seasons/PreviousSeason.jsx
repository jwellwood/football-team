import React from 'react';
// MUITODO
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Components
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomIcon from 'lib/components/icons/CustomIcon';
import PresentationModal from 'components/ui/modals/PresentationModal';
import CustomAvatar from 'lib/components/avatars/CustomAvatar';
import PreviousSeasonContent from './PreviousSeasonContent';
import CustomTypography from 'components/ui/text/CustomTypography';

const PreviousSeasons = ({ season }) => {
  const { seasonName } = season;

  return (
    <PresentationModal
      buttonElement={
        <ListItemWrapper button noDivider>
          <CustomAvatar isList shadow='secondary'>
            <CustomIcon icon='monument' size='sm' color='secondary' />
          </CustomAvatar>
          <ListItemSecondaryAction>
            <CustomTypography>{seasonName}</CustomTypography>
          </ListItemSecondaryAction>
        </ListItemWrapper>
      }
    >
      <PreviousSeasonContent season={season} />
    </PresentationModal>
  );
};

export default PreviousSeasons;
