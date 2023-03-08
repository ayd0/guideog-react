import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
    Button
} from "reactstrap";
import GuideogLogo from '../app/assets/img/guideog-l3-alpha.png';
import '../App.css';

const HomeNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div id="nav-section" sticky="top">
            <Container>
                <Navbar dark expand="sm">
                    <NavbarBrand href="/">
                        <img
                            src={GuideogLogo}
                            alt="guideog logo"
                            className="float-start"
                        />
                    </NavbarBrand>
                    <Button className="xs-btn-login btn-login btn-sm mt-1 d-block d-sm-none">
                        Log In
                    </Button>
                    <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                    <Collapse isOpen={menuOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <a href="/" class="nav-link active">
                                    Home
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href="/" class="nav-link">
                                    Explore
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href="/" class="nav-link">
                                    FAQ
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href="/" class="nav-link">
                                    Main
                                </a>
                            </NavItem>
                            <NavItem>
                                <Button className="btn-login btn-sm mt-1 d-none d-sm-block">
                                    Log In
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default HomeNav;
