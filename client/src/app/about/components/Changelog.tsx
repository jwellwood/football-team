import React, { ReactElement } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
// Data
import { version, changeLog } from 'shared/data';
// Components
import SectionContainer from 'shared/layout/SectionContainer';
import PresentationModal from 'lib/components/modals/PresentationModal';
import ListWrapper from 'lib/components/lists/ListWrapper';
import ListItemWrapper from 'lib/components/lists/ListItemWrapper';
import CustomButton from 'lib/components/buttons/CustomButton';
import CustomTypography from 'lib/components/typography/CustomTypography';
// Types
import { IChangeLog } from 'shared/data/changeLog';

const Changelog: React.FC = () => {
  const button: ReactElement = <CustomButton>View Changelog</CustomButton>;

  return (
    <PresentationModal buttonElement={button}>
      <>
        {changeLog.map((change: IChangeLog, i) => (
          <ListWrapper key={i}>
            <SectionContainer title={`v${change.version}`}>
              {change.changes.map((text: string, i) => (
                <ListItemWrapper key={text + i}>
                  <ListItemText primary={text} />
                </ListItemWrapper>
              ))}
            </SectionContainer>
          </ListWrapper>
        ))}
        <CustomTypography size='sm'>current version {version}</CustomTypography>
      </>
    </PresentationModal>
  );
};

export default Changelog;
