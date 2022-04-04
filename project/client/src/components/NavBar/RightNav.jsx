import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    z-index: 999;
  }
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(245, 245, 245, 0.3);
    position: fixed;
    z-index: 99;

    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li, a {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a
          href="#home"
          rel="noreferrer"
          /* target="_blank" */
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#features"
          rel="noreferrer"
          /* target="_blank" */
        >
          Features
        </a>
      </li>
      <li>
        <a
          href="#about"
          rel="noreferrer"
          /* target="_blank" */
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#contact"
          rel="noreferrer"
          /* target="_blank" */
        >
          Contact Us
        </a>
      </li>
      <li>
        <a
          href="#login"
          rel="noreferrer"
          /* target="_blank" */
        >
          Log In
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;