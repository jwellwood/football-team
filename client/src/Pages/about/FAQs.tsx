import React from 'react';
import { faqs } from 'shared/data/faqs';
import CustomContainer from 'shared/layout/CustomContainer';
import CustomExpansion from 'components/ui/expansion/CustomExpansion';
import CustomTypography from 'components/ui/text/CustomTypography';

const FAQs: React.FC = () => {
  return (
    <CustomContainer>
      {faqs.map(({ title, text }) => (
        <CustomExpansion key={title} title={title} icon='goal'>
          <CustomTypography>{text}</CustomTypography>
        </CustomExpansion>
      ))}
      ;
    </CustomContainer>
  );
};

export default FAQs;
