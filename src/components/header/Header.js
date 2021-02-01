import React from 'react'
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import '../../assets/css/OverrideBootstrap.css'
import LoginHeader from '../auth/LoginHeader'
import {  CartPlus } from 'react-bootstrap-icons';

const Header = () => {

    return (
        <>
            <Navbar bg="light" variant="light" expand="lg" >
                <Navbar.Brand href="/"> <h1>Mesele</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Ana Sayfa</Nav.Link>
                        <Nav.Link href="/articles">Makaleler</Nav.Link>
                    </Nav>
                    <Form inline className="justify-content-center mr-3"><CartPlus color="royalblue" size={35} /></Form>
                    
                    <Form inline >
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                    <LoginHeader />
                </Navbar.Collapse>
            </Navbar>
            {/* <NavLink to="/" activeClassName="active" exact>Ana Sayfa</NavLink>
            <NavLink to="/categories" activeClassName="active">Kategoriler</NavLink>
            <NavLink to="/articles" activeClassName="active">Makaleler</NavLink> */}
        </>
    )
}

export default Header
