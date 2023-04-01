import React, { useState } from 'react';
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
    Container
} from 'reactstrap';
import LogoBCR from '../LogoBCR';


const HeaderNav = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div height={args.height} style={{
            background: '#F1F3FF',
        }}>


            <Container>
                <Navbar expand='xl' style={{ backgroundColor: 'transparent' }} color="transparent">
                    <NavbarBrand href="/"><LogoBCR /></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem style={{
                                marginRight: '32px'
                            }}>
                                <NavLink href="/#our-services">Our Services</NavLink>
                            </NavItem>
                            <NavItem style={{
                                marginRight: '32px'
                            }}>
                                <NavLink href="/#why-us">Why Us</NavLink>
                            </NavItem>
                            <NavItem style={{
                                marginRight: '32px'
                            }}>
                                <NavLink href="/#testimonial">Testimonial</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#faq">
                                    FAQ
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <Offcanvas isOpen={isOpen} toggle={toggle} direction="end">
                        <OffcanvasHeader toggle={toggle}>
                            BCR
                        </OffcanvasHeader>
                        <OffcanvasBody>
                            <Nav className="ms-auto" navbar>
                                <NavItem style={{
                                    marginRight: '32px'
                                }}>
                                    <NavLink href="/#our-services">Our Services</NavLink>
                                </NavItem>
                                <NavItem style={{
                                    marginRight: '32px'
                                }}>
                                    <NavLink href="/#why-us">Why Us</NavLink>
                                </NavItem>
                                <NavItem style={{
                                    marginRight: '32px'
                                }}>
                                    <NavLink href="/#testimonial">Testimonial</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/#faq">
                                        FAQ
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </OffcanvasBody>
                    </Offcanvas>
                </Navbar>
            </Container>
        </div>
    );
}

export default HeaderNav;