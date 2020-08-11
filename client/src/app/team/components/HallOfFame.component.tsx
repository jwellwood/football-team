import React from 'react';
// MUITODO
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Components
import { ListItemWrapper } from 'components/lists';
import CustomIcon from 'lib/icons/CustomIcon';
import { PresentationModal } from 'components/modals';
import { CustomAvatar } from 'components/avatars';
import ModalContent, { IModalData } from '../shared/ModalContent';
import { CustomTypography } from 'components/typography';
import { IHallOfFame } from 'shared/types';

interface Props {
  hallOfFamer: IHallOfFame;
}

const HallOfFame: React.FC<Props> = ({
  hallOfFamer: { name, yearInducted, yearJoined, yearLeft, description },
}) => {
  const data: IModalData = {
    title: 'Hall of Fame',
    highlight: yearInducted,
    icon: 'landmark',
    iconColor: 'primary',
    main: name,
    extra: `${yearJoined} - ${yearLeft}`,
    description,
  };

  return (
    <PresentationModal
      buttonElement={
        <ListItemWrapper button>
          <CustomAvatar isList background='transparent' shadow='error'>
            <CustomIcon icon='landmark' size='sm' color='primary' />
          </CustomAvatar>
          <ListItemText
            primary={
              <CustomTypography main bold>
                {name}
              </CustomTypography>
            }
          />
          <ListItemSecondaryAction>
            <CustomTypography>{yearInducted}</CustomTypography>
          </ListItemSecondaryAction>
        </ListItemWrapper>
      }
    >
      <ModalContent data={data} />
    </PresentationModal>
  );
};

export default HallOfFame;
