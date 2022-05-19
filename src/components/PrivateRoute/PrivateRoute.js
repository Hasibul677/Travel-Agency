import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

function PrivateRoute({ children, ...rest }) {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <Spinner animation="border" />
    }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.displayName ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;