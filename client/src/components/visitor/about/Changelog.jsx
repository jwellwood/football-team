import React from 'react';
// MUI
import ListItemText from '@material-ui/core/ListItemText';
// data
import { version, changeLog } from 'assets/data';
// Components
import PresentationModal from 'components/ui/modals/PresentationModal';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CustomButton from 'components/ui/buttons/CustomButton';
import CustomTypography from 'components/ui/text/CustomTypography';
import SectionContainer from 'containers/SectionContainer';

const Changelog = () => {
  const button = <CustomButton>View Changelog</CustomButton>;

  return (
    <PresentationModal buttonElement={button}>
      <>
        {changeLog.map((change, i) => (
          <ListWrapper key={i}>
            <SectionContainer title={`v${change.version}`}>
              {change.changes.map((text, idx) => (
                <ListItemWrapper key={idx}>
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
