import React from "react";
import { Link } from "react-router-dom";
import ticketPerson from './../img/ticket.jpg';
import styled from 'styled-components';

function Header() {
  const HelpQueueHeader = styled.h1`
    font-size: 32px;
    text-align: center;
    color: white;
    background-color: purple;
    `;
  const StyledWrapper = styled.div`
  background-color: #333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  color: white;
  `;
  const StyleImg = styled.img`
  height: 200px;
  border: 3px dashed black;
  margin-left: 10px;
  `;
  const StyleUl = styled.ul`
  list-style: none;
  gap: 20px;
  li {
   margin: 0
  }
  li a:hover {
   background-color: #555;
  }
  `;

  return (
    // <React.Fragment>
    <StyledWrapper>
      <HelpQueueHeader>
        Help Queue
      </HelpQueueHeader>
      <StyleImg src={ticketPerson} alt='person holding ticket' />
      <StyleUl>
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
      </StyleUl>
    </StyledWrapper>
  );
}

export default Header;