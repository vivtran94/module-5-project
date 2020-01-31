import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export class PrivateRoute extends Component {
  render() {
    const { token, component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={() => {
          const Component = component;
          if (token) return <Component />;
          else {
            return (
              <Redirect to={{ pathname: '/'}} />
            );
          }
        }}
      />
    );
  }
}