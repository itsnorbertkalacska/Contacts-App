import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col text-right">
              <Link to="/add" className="btn btn-primary">Add New Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
