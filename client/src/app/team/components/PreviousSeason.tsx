import React from 'react';
// MUITODO
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Components
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import CustomIcon from 'lib/components/icons/CustomIcon';
import PresentationModal from 'lib/components/modals/PresentationModal';
import CustomAvatar from 'lib/components/avatars/CustomAvatar';
import PreviousSeasonContent from './PreviousSeason.component';
import CustomTypography from 'lib/components/typography/CustomTypography';
import { IPreviousSeasonData } from 'shared/types';

interface Props {
  season: IPreviousSeasonData;
}

const PreviousSeasons: React.FC<Props> = ({ season }) => {
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
