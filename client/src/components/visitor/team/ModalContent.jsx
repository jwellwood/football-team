import React from 'react';
// Components
import GreyBackground from 'containers/GreyBackground';
import CustomText from 'components/ui/text/CustomText';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import CustomIcon from 'components/ui/icons/CustomIcon';
import GridItem from 'components/ui/grids/GridItem';
import ValueText from 'components/ui/text/ValueText';

const ModalContent = ({ data }) => {
  const { title, highlight, icon, iconColor, main, extra, description } = data;

  return (
    <GreyBackground>
      <CenteredGrid>
        <GridItem>
          <CustomText type='large'>{title}</CustomText>
          <CustomText div type='highlight'>
            {highlight}
          </CustomText>
        </GridItem>
        <GreyBackground>
          <GridItem>
            <CustomIcon icon={icon} size='6x' color={iconColor} />
          </GridItem>
        </GreyBackground>
        <GridItem>
          <ValueText>{main}</ValueText>
          {extra ? (
            <CustomText div type='muted'>
              {extra}
            </CustomText>
          ) : null}
        </GridItem>
        {description ? (
          <GreyBackground>
            <CustomText type='highlight'>{description}</CustomText>
          </GreyBackground>
        ) : null}
      </CenteredGrid>
    </GreyBackground>
  );
};

export default ModalContent;
