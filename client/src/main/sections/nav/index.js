import React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component {

  render() {
    return (
      <nav className="links-wrapper">
        <Link to="problems" className="link">Problems</Link>
        <Link to="solutions" className="link">Solutions</Link>
      </nav>
    );
  }
}

export default Nav;