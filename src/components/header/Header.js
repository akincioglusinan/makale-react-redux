import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import '../../assets/css/OverrideBootstrap.css'
import LoginHeader from '../auth/LoginHeader'
import CartHeader from '../cart/CartHeader';

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
                    
                    <CartHeader />

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
