import React from "react";
// import { Link } from "react-router-dom";
import {
  NavbarSection,
  Container,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor,
  Anchorrr,
  Anchorrrr,
} from "./style.js";

const Navbar = () => {
  return (
    <NavbarSection>
      {/* <div className="container"> */}
      <Container>
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>

        <UlList>
          {/* <ListItem><Link to="/">Home</Link></ListItem> */}
          <ListItem>
            <Anchorrrr to="/">Home</Anchorrrr>
          </ListItem>
          <ListItem>
            <Anchor href="#">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">About</Anchor>
          </ListItem>
          <ListItem>
            <Anchorrr to="/Contact">Contact</Anchorrr>
          </ListItem>
          {/* <ListItem><Link to="/Contact">Contact</Link></ListItem> */}
        </UlList>
      </Container>
      {/* </div> */}
    </NavbarSection>
  );
};

export default Navbar;
