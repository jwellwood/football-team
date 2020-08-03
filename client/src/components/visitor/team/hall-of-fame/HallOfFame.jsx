import React from 'react';
// MUITODO
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Components
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomIcon from 'lib/components/icons/CustomIcon';
import PresentationModal from 'components/ui/modals/PresentationModal';
import CustomAvatar from 'lib/components/avatars/CustomAvatar';
import ModalContent from '../ModalContent';
import SectionContainer from 'shared/layout/SectionContainer';
import CustomTypography from 'components/ui/text/CustomTypography';

const HallOfFame = ({ hallOfFamer }) => {
  const { name, yearInducted, yearJoined, yearLeft, description } = hallOfFamer;
  const data = {
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
