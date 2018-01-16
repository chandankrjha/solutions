import React from 'react';
import { Link } from "react-router-dom";

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <Link to="footer" className="link">Footer</Link>
      </footer>
    );
  }
}

export default Footer;