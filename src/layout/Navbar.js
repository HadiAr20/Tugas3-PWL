import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to="" className='nav-link'>Home</Link>
                            </li>
                        </ul>

                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to="/about" className='nav-link'>About Me</Link>
                            </li>
                        </ul>

                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to="/contact" className='nav-link'>My Contact</Link>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
