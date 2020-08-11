import React from 'react';
import { faqs } from '../utils';
import { CustomContainer } from 'shared/layout/containers';
import { CustomExpansion } from 'components/lists';
import { CustomTypography } from 'components/typography';
// Types
import { IFaq } from '../shared';

const FAQs: React.FC = () => {
  return (
    <CustomContainer>
      {faqs.map(({ title, text }: IFaq) => (
        <CustomExpansion key={title} title={title} icon='goal'>
          <CustomTypography>{text}</CustomTypography>
        </CustomExpansion>
      ))}
    </CustomContainer>
  );
};

export default FAQs;
