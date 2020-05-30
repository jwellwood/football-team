import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Internal
import Spinner from 'components/ui/loading/Spinner';
import { getAuth } from 'reduxStore/auth/auth_actions';
import { SIGN_IN, PROFILE } from 'router/route_names';
// The three arguments come from the routes page
export default function (ComposedClass, protectedRoute, adminRoute = null) {
  const AuthenticationCheck = (props) => {
    let history = useHistory();
    let dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      dispatch(getAuth()).then((res) => {
        if (!res.payload.isAuth) {
          if (protectedRoute) {
            // if user is not authenticated, they can only see home/login/sign up
            history.push(SIGN_IN);
          }
          // Else we can move forward
          // Now check admin routes
        } else {
          if (adminRoute && !res.payload.isAdmin) {
            // If not admin but wants an admin route, back to user dashboard
            history.push(PROFILE);
          } else {
            // This will stop logged in user visiting login or signup
            if (protectedRoute === false) {
              history.push(PROFILE);
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
