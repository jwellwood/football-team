import React from 'react';
// MUITODO
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Components
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import CustomIcon from 'lib/components/icons/CustomIcon';
import PresentationModal from 'lib/components/modals/PresentationModal';
import CustomAvatar from 'lib/components/avatars/CustomAvatar';
import ModalContent, { IModalData } from '../shared/ModalContent';
import SectionContainer from 'shared/layout/SectionContainer';
import CustomTypography from 'lib/components/typography/CustomTypography';
import { IHallOfFameData } from 'shared/types';

interface Props {
  hallOfFamer: IHallOfFameData;
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
    <SectionContainer title='Hall of Fame'>
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
    </SectionContainer>
  );
};

export default HallOfFame;
