import React from 'react';
// MUITODO
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Components
import { ListItemWrapper } from 'components/lists';
import CustomIcon from 'lib/icons/CustomIcon';
import { PresentationModal } from 'components/modals';
import { CustomAvatar } from 'components/avatars';
import PreviousSeasonContent from './PreviousSeason.component';
import { CustomTypography } from 'components/typography';
import { IPreviousSeason } from 'shared/types';

interface Props {
  season: IPreviousSeason;
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
