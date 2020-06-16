import React from 'react';
// data
import { faqs } from 'assets/data/faqs';
// Components
import CustomExpansion from 'components/ui/expansion/CustomExpansion';
import CustomTypography from 'components/ui/text/CustomTypography';

const FAQs = () => {
  return faqs.map((item) => (
    <CustomExpansion key={item.title} title={item.title} icon='goal'>
      <CustomTypography>{item.text}</CustomTypography>
    </CustomExpansion>
  ));
};

export default FAQs;
