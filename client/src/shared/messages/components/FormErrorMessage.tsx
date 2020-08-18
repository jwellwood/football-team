import React from 'react';
import { CustomTypography } from 'components/typography';
import { form_error_text as errText } from 'constants/text';

interface Props {
  error: any; // TODO
}

const FormErrorMessage: React.FC<Props> = ({ error }) => {
  let message = errText.default;
  switch (error.type) {
    case 'required':
      message = errText.required;
      break;
    case 'minLength':
      message = errText.short;
      break;
    case 'maxLength':
      message = errText.long;
      break;
    case 'max':
      message = errText.high;
      break;
    case 'min':
      message = errText.low;
      break;
    case 'pattern':
      message = errText.pattern;
      break;
    default:
      break;
  }
  return (
    <CustomTypography size='xs' color='error'>
      {message}
    </CustomTypography>
  );
};

export default FormErrorMessage;
