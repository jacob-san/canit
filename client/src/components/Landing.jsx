import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Mailer</h1>
        <p>Collect feedback from your users</p>
      </div>
    );
  }
}

export default Landing;