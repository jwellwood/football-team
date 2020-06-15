import React from 'react';
// Components
import CustomText from 'components/ui/text/CustomText';
import CustomExpansion from 'components/ui/expansion/CustomExpansion';
import { faqs } from 'assets/data/faqs';

const FAQs = () => {
  return faqs.map((item) => (
    <CustomExpansion key={item.title} title={item.title} icon='goal'>
      <CustomText type='muted'>{item.text}</CustomText>
    </CustomExpansion>
  ));
};

export default FAQs;
