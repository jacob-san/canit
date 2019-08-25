import React from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-146426298-1');

export default function withAnalytics(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      this.logPageView();
    }

    logPageView = () => {
      console.log('log Analytics');
      ReactGA.pageview(window.location.pathname);
    };

    logEvent = ({ category, action }) => {
      ReactGA.event({
        category,
        action
      });
    };

    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return (
        <WrappedComponent
          logPageView={this.logPageView}
          logEvent={this.logEvent}
          {...this.props}
        />
      );
    }
  };
}
