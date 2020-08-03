import { lazy } from 'react';
import { reg_routes as routes } from './paths';
import { IRoute } from 'shared/types';

const RegistrationPage = lazy(() =>
  import('Pages/registration/pages/Registration.page')
);
const ValidatedEmailPage = lazy(() =>
  import('Pages/registration/pages/ValidatedEmail.page')
);
const ForgotPasswordPage = lazy(() =>
  import('Pages/registration/pages/ForgotPassword.page')
);
const ResetPasswordPage = lazy(() =>
  import('Pages/registration/pages/ResetPassword.page')
);

export const registrationRoutes: IRoute[] = [
  { path: routes.SIGN_IN, component: RegistrationPage },
  { path: routes.EMAIL_VALIDATED, component: ValidatedEmailPage },
  { path: routes.FORGOT_PASSWORD, component: ForgotPasswordPage },
  { path: routes.RESET_PASSWORD, component: ResetPasswordPage },
];
