import React from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import SectionBackground from 'shared/layout/SectionBackground';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import CustomIcon from 'lib/components/icons/CustomIcon';
import GridItem from 'lib/components/grids/GridItem';
import CustomTypography from 'lib/components/typography/CustomTypography';

export interface IModalData {
  title: string;
  highlight: string | number;
  icon: IconName;
  iconColor: string;
  main: string;
  extra: string;
  description: string;
}

interface Props {
  data: IModalData;
}

const ModalContent: React.FC<Props> = ({
  data: { title, highlight, icon, iconColor, main, extra, description },
}) => {
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
