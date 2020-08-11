import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Internal
import { Spinner } from 'components/loaders';
import { getAuth } from 'reduxStore/auth/auth_actions';
import { reg_routes, user_routes } from 'router';
import { AppDispatch } from 'reduxStore/rootReducer';

interface Props {
  props: any; // TODO
}

// The three arguments come from the routes page
export default function (
  ComposedClass: any, // TODO
  protectedRoute: boolean,
  adminRoute: boolean = null
) {
  const AuthenticationCheck: React.FC<Props> = (props) => {
    let history = useHistory();
    let dispatch: AppDispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      dispatch(getAuth()).then((res: any) => {
        if (!res.payload.isAuth) {
          if (protectedRoute) {
            // if user is not authenticated, they can only see home/login/sign up
            history.push(reg_routes.SIGN_IN);
          }
          // Else we can move forward
          // Now check admin routes
        } else {
          if (adminRoute && !res.payload.isAdmin) {
            // If not admin but wants an admin route, back to user dashboard
            history.push(user_routes.PROFILE);
          } else {
            // This will stop logged in user visiting login or signup
            if (protectedRoute === false) {
              history.push(user_routes.PROFILE);
            }
          }
        }
        setLoading(false);
      });
    }, [dispatch, history]);

    return loading ? <Spinner /> : <ComposedClass {...props} />;
  };

  return AuthenticationCheck;
}
