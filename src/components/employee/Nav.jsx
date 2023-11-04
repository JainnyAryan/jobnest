import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./styles/findJobDash.css";


function Navigation() {
  const imageStyles = {
    width: "200px",
    height: "auto",
    borderRadius: "30px",
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to="/" className="navbar-brand mx-3">
        {/* <img src={logoImage} alt="Logo" style={imageStyles} /> */}
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{marginLeft:"auto", marginRight:"2vw"}}> {/* Use ml-auto to align items to the right */}
          <Link to="/find-work" className="nav-link text-light">
            Find Work
          </Link>
          <Link to="/applications" className="nav-link text-light">
            Applications
          </Link>
          <Link to="/skill" className="nav-link text-light">
            Skills
          </Link>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;

