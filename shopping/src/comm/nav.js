import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate, Link} from 'react-router-dom'

function ShopNavBar() {

    let navi = useNavigate();
    return <>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand onClick={() => {
                        navi("/")   
                    }}>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/detail">Detail</Nav.Link>
                    <Nav.Link onClick={() => {
                        navi("/about")   
                    }} >about</Nav.Link>
                    <Nav.Link onClick={() => {
                        navi("/cart")   
                    }} >cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>;
}

export default ShopNavBar;