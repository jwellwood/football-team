import { lazy } from 'react';
import {
  SIGN_IN,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
  EMAIL_VALIDATED,
} from 'router/route_names';

const RegistrationPage = lazy(() =>
  import('Pages/registration/RegistrationPage')
);
const ValidatedEmailPage = lazy(() =>
  import('Pages/registration/ValidatedEmailPage')
);
const ForgotPasswordPage = lazy(() =>
  import('Pages/registration/ForgotPasswordPage')
);
const ResetPasswordPage = lazy(() =>
  import('Pages/registration/ResetPasswordPage')
);

export const registrationRoutes = [
  { path: SIGN_IN, component: RegistrationPage },
  { path: EMAIL_VALIDATED, component: ValidatedEmailPage },
  { path: FORGOT_PASSWORD, component: ForgotPasswordPage },
  { path: RESET_PASSWORD, component: ResetPasswordPage },
];
