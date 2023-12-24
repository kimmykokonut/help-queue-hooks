import React from "react";
import { Link } from "react-router-dom";
import ticketPerson from './../img/ticket.jpg';
import './../Header.css';

function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <h1>Help Queue</h1>
        <img src={ticketPerson} alt='person holding ticket' />
        <ul>
          <li>
            <Link to="/">
              <button type='button'>
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/sign-in">
              <button type='button'>
                Sign In
              </button></Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Header;