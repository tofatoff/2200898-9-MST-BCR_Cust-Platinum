import React, { useState } from "react";
import {
  Collapse,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import LogoBCR from "../LogoBCR";
import { useSelector, useDispatch } from "react-redux";
import authSlice from "../../redux/action-slice";

const HeaderNav = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch   = useDispatch();
  const toggle = () => setIsOpen(!isOpen);
  const selector = useSelector((state) => state.authStore);
  const isLogin = selector.isAuthenticated

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(authSlice.actions.logout())
  }
  
  return (
    <div
      height={args.height}
      style={{
        background: "#F1F3FF",
      }}
    >
      <Container>
        <Navbar
          expand="xl"
          style={{ backgroundColor: "transparent" }}
          color="transparent"
        >
          <NavbarBrand href="/">
            <LogoBCR />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse navbar>
            <Nav className="ms-auto" navbar>
              <NavItem
                style={{
                  marginRight: "32px",
                }}
              >
                <NavLink href="/#our-services">Our Services</NavLink>
              </NavItem>
              <NavItem
                style={{
                  marginRight: "32px",
                }}
              >
                <NavLink href="/#why-us">Why Us</NavLink>
              </NavItem>
              <NavItem
                style={{
                  marginRight: "32px",
                }}
              >
                <NavLink href="/#testimonial">Testimonial</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#faq">FAQ</NavLink>
              </NavItem>

              {isLogin ? (                                
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>                  
              ) : (
                <NavLink href="/register">
                  <button className='btn btn-success'>Register</button>
                </NavLink>
              )}
              
            </Nav>
          </Collapse>
          <Offcanvas isOpen={isOpen} toggle={toggle} direction="end">
            <OffcanvasHeader toggle={toggle}>BCR</OffcanvasHeader>
            <OffcanvasBody>
              <Nav className="ms-auto" navbar>
                <NavItem
                  style={{
                    marginRight: "32px",
                  }}
                >
                  <NavLink href="/#our-services">Our Services</NavLink>
                </NavItem>
                <NavItem
                  style={{
                    marginRight: "32px",
                  }}
                >
                  <NavLink href="/#why-us">Why Us</NavLink>
                </NavItem>
                <NavItem
                  style={{
                    marginRight: "32px",
                  }}
                >
                  <NavLink href="/#testimonial">Testimonial</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/#faq">FAQ</NavLink>
                </NavItem>
              </Nav>
            </OffcanvasBody>
          </Offcanvas>
        </Navbar>
      </Container>
    </div>
  );
};

export default HeaderNav;
