import React from 'react';
// MUITODO
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Components
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import ValueText from 'components/ui/text/ValueText';
import CustomIcon from 'components/ui/icons/CustomIcon';
import PresentationModal from 'components/ui/modals/PresentationModal';
import CustomAvatar from 'components/ui/avatars/CustomAvatar';
import ModalContent from '../ModalContent';
import CustomText from 'components/ui/text/CustomText';
import GreyBackground from 'containers/GreyBackground';

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
    <PresentationModal
      buttonElement={
        <GreyBackground>
          <ListItemWrapper button>
            <CustomAvatar isList background='transparent' shadow='error'>
              <CustomIcon icon='landmark' size='sm' color='primary' />
            </CustomAvatar>
            <ListItemText primary={<ValueText>{name}</ValueText>} />
            <ListItemSecondaryAction>
              <CustomText type='highlight'>{yearInducted}</CustomText>
            </ListItemSecondaryAction>
          </ListItemWrapper>
        </GreyBackground>
      }
    >
      <ModalContent data={data} />
    </PresentationModal>
  );
};

export default HallOfFame;
