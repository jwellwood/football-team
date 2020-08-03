import { lazy } from 'react';
import { reg_routes as routes } from './paths';
import { IRoute } from 'shared/types';

const RegistrationPage = lazy(() =>
  import('Pages/registration/pages/RegistrationPage')
);
const ValidatedEmailPage = lazy(() =>
  import('Pages/registration/pages/ValidatedEmailPage')
);
const ForgotPasswordPage = lazy(() =>
  import('Pages/registration/pages/ForgotPasswordPage')
);
const ResetPasswordPage = lazy(() =>
  import('Pages/registration/pages/ResetPasswordPage')
);

export const registrationRoutes: IRoute[] = [
  { path: routes.SIGN_IN, component: RegistrationPage },
  { path: routes.EMAIL_VALIDATED, component: ValidatedEmailPage },
  { path: routes.FORGOT_PASSWORD, component: ForgotPasswordPage },
  { path: routes.RESET_PASSWORD, component: ResetPasswordPage },
];
