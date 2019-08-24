import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../logo.png';
import Payments from './Payments';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <React.Fragment>
            <li>
              <Payments />
            </li>
            <li style={{ margin: '0 10px' }}>{`Credits: ${
              this.props.auth.credits
            }`}</li>
            <li>
              <img
                src={this.props.auth.profilePicture}
                alt=""
                style={{ borderRadius: '50%' }}
              />
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </React.Fragment>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="brand-logo"
            style={{ height: '100%' }}
          >
            <img src={logo} style={{ height: '100%' }} />
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
