import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: transparent; /* 2px solid #f1f1f1 */;
  background-color: rgba( 128, 128, 128, 0.1);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  position: fixed;

  .logo {
    padding: 15px 0;
    z-index: 999;
    color: rgb(108, 57, 207);
    font-size: 1.5rem;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <strong>
          <a
            href="#logo"
            rel="noreferrer"
            /* target="_blank" */
          >
            LOGO
          </a>
        </strong>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
