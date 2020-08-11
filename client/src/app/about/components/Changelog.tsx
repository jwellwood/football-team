import React, { ReactElement } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
// Data
import { version, changeLog } from 'constants/data';
// Components
import { SectionContainer } from 'shared/layout/containers';
import { PresentationModal } from 'components/modals';
import { ListWrapper, ListItemWrapper } from 'components/lists';
import { CustomButton } from 'components/buttons';
import { CustomTypography } from 'components/typography';
// Types
import { IChangeLog } from 'constants/data/changeLog';

const Changelog: React.FC = () => {
  const button: ReactElement = <CustomButton>View Changelog</CustomButton>;

  return (
    <PresentationModal buttonElement={button}>
      <>
        {changeLog.map((change: IChangeLog, i: number) => (
          <ListWrapper key={i}>
            <SectionContainer title={`v${change.version}`}>
              {change.changes.map((text: string, i: number) => (
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
