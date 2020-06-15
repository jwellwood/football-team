import React from 'react';
import PresentationModal from 'components/ui/modals/PresentationModal';
import { version, changeLog } from 'assets/data';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import ListItemText from '@material-ui/core/ListItemText';
import SectionTitle from 'components/ui/headers/SectionTitle';
import CustomText from 'components/ui/text/CustomText';
import CustomButton from 'components/ui/buttons/CustomButton';

const Changelog = () => {
  const button = <CustomButton>View Changelog</CustomButton>;

  return (
    <PresentationModal buttonElement={button}>
      <>
        {changeLog.map((change, i) => (
          <ListWrapper key={i}>
            <SectionTitle title={`v${change.version}`} />
            {change.changes.map((text, idx) => (
              <ListItemWrapper key={idx}>
                <ListItemText primary={text} />
              </ListItemWrapper>
            ))}
          </ListWrapper>
        ))}
        <CustomText type='caption'>current version {version}</CustomText>
      </>
    </PresentationModal>
  );
};

export default Changelog;
