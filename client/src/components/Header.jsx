import React from 'react';
import { connect } from 'react-redux';
import logo from '../logo.png'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  renderContent() {
    switch(this.props.auth) {
      case null: 
        return;
      case false: 
        return <li><a href="/auth/google">Login with Google</a></li>
      default: 
        return <li><a href="/api/logout">Logout</a></li>
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo" style={{"height": "100%"}}><img src={logo} style={{"height": "100%"}}/></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
          
    );
  }
}

function mapStateToProps({auth}) {
  return { auth };
}
export default connect(mapStateToProps)(Header);