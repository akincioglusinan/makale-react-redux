import React from 'react'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import '../../assets/css/OverrideBootstrap.css'

const Header = () => {

    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand href="/"> <h1>Mesele</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Ana Sayfa</Nav.Link>
                        <Nav.Link href="/articles">Makaleler</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">

                            <NavDropdown.Item href="/">Ana Sayfa</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                    <Form inline className="ml-2">
                    <Button variant="primary"> Giriş </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            {/* <NavLink to="/" activeClassName="active" exact>Ana Sayfa</NavLink>
            <NavLink to="/categories" activeClassName="active">Kategoriler</NavLink>
            <NavLink to="/articles" activeClassName="active">Makaleler</NavLink> */}
        </>
    )
}

export default Header
