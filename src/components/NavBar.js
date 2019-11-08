import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import styled from "styled-components";

const NBB = styled.h3`
  color: #fbd54e;
  font-family: "Bowlby One SC", cursive;
`;
const DT = styled(DropdownToggle)`
  font-family: "Bowlby One SC", cursive;
  color: blue;
`;

const NasaBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="transparent" light expand="md">
        <img
          src="https://img.icons8.com/color/48/000000/r2-d2.png"
          alt="icon of R2D2"
        />
        <NBB href="/">NASA'S INFO THE DAY</NBB>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto " navbar>
            <UncontrolledDropdown nav inNavbar>
              <DT caret>Menu</DT>
              <DropdownMenu right>
                <DropdownItem>Calendar</DropdownItem>
                <DropdownItem>Videos</DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NasaBar;
