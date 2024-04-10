import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShopNavBar() {
    return <>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/detail">Detail</Nav.Link>
                    <Nav.Link href="/about">about</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>;
}

export default ShopNavBar;