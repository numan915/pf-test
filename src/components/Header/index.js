import React, { useState } from 'react';
import './style.css';
import treval from '../images/treval-logo.png';
// import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav, Row, Col ,
    NavItem,
    NavLink, Button
} from 'reactstrap';

class Header extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            hideValu: false,

        };
      
        this.toggle = this.toggle.bind(this);
        
    }
    

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
   

    render() {
            
 
  return (

     <div class="navigation-menu">
        
         <Navbar className="pf-header" color="black" light expand="lg">
                <Container>
                <Row>
                <Col sm={{ size: 'auto', offset: 1 }}><NavbarBrand  to='/'>
                        
                        <img src={treval} alt="logo" className="trevel-logo" />
                    </NavbarBrand></Col>
            
      </Row>
                    

                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>

                            <Nav className="ml-auto" navbar  >
                                <NavItem>
                                <NavLink href="/">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                <NavLink href="/">
                                Flight
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                <NavLink href="/">
                                Hotels
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                <NavLink href="/">
                                Visa
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                <NavLink href="/">
                                Travel Guides
                                    </NavLink>
                                    </NavItem>
                               
                            </Nav>
                        
                    </Collapse>
                </Container>
            </Navbar>
</div>
  );
}
}
export default Header;

