import React from 'react';
import logo from '../logo.png'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo" style={{"height": "100%"}}><img src={logo} style={{"height": "100%"}}/></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Login with Google</a></li>
          </ul>
        </div>
      </nav>
          
    );
  }
}

export default Header;