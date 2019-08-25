import React from 'react';
import Login from '../login/Login';

function isLoggedIn(WrappedComponent) {
  return class extends React.Component {
    render() {
      const { isLoggedIn } = this.props;
      // Wraps the input component in a container, without mutating it. Good!
      return isLoggedIn ? <WrappedComponent {...this.props} /> : <Login />;
    }
  };
}

export default isLoggedIn;
