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
    height: 75.2vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li, a {
      color: #0000ff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} className='list'>
      <li>
        <a
          href="#home"
          rel="noreferrer"
          className='page-scroll'
          /* target="_blank" */
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#features"
          rel="noreferrer"
          className='page-scroll'
          /* target="_blank" */
        >
          Features
        </a>
      </li>
      <li>
        <a
          href="#about"
          rel="noreferrer"
          className='page-scroll'
          /* target="_blank" */
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#contact"
          rel="noreferrer"
          className='page-scroll'
          /* target="_blank" */
        >
          Contact Us
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;