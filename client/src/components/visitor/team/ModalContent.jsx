import React from 'react';
// Components
import SectionBackground from 'containers/SectionBackground';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import CustomIcon from 'components/ui/icons/CustomIcon';
import GridItem from 'components/ui/grids/GridItem';
import CustomTypography from 'components/ui/text/CustomTypography';

const ModalContent = ({ data }) => {
  const { title, highlight, icon, iconColor, main, extra, description } = data;

  return (
    <SectionBackground>
      <CenteredGrid>
        <GridItem>
          <CustomTypography size='lg'>{title}</CustomTypography>
          <CustomTypography color='warning' div>
            {highlight}
          </CustomTypography>
        </GridItem>
        <SectionBackground>
          <GridItem>
            <CustomIcon icon={icon} size='6x' color={iconColor} />
          </GridItem>
        </SectionBackground>
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
          <SectionBackground>
            <CustomTypography color='warning' font='secondary'>
              {description}
            </CustomTypography>
          </SectionBackground>
        ) : null}
      </CenteredGrid>
    </SectionBackground>
  );
};

export default ModalContent;
