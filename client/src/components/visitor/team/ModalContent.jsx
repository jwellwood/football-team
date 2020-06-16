import React from 'react';
// Components
import GreyBackground from 'containers/GreyBackground';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import CustomIcon from 'components/ui/icons/CustomIcon';
import GridItem from 'components/ui/grids/GridItem';
import CustomTypography from 'components/ui/text/CustomTypography';

const ModalContent = ({ data }) => {
  const { title, highlight, icon, iconColor, main, extra, description } = data;

  return (
    <GreyBackground>
      <CenteredGrid>
        <GridItem>
          <CustomTypography size='lg'>{title}</CustomTypography>
          <CustomTypography color='warning' div>
            {highlight}
          </CustomTypography>
        </GridItem>
        <GreyBackground>
          <GridItem>
            <CustomIcon icon={icon} size='6x' color={iconColor} />
          </GridItem>
        </GreyBackground>
        <GridItem>
          <CustomTypography main bold>
            {main}
          </CustomTypography>
          {extra ? (
            <CustomTypography size='sm' div>
              {extra}
            </CustomTypography>
          ) : null}
        </GridItem>
        {description ? (
          <GreyBackground>
            <CustomTypography color='warning' font='secondary'>
              {description}
            </CustomTypography>
          </GreyBackground>
        ) : null}
      </CenteredGrid>
    </GreyBackground>
  );
};

export default ModalContent;
