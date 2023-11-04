import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./styles/findJobDash.css";

function Navbar2() {
  const imageStyles = {
    width: "200px",
    height: "auto",
    borderRadius: "30px",
  };

  return (
    <nav class="navbar bg-dark " style={{width:'100%'}} >
    <Link to ="/" class="navbar-brand mx-3">
    <img  src="/LOGO_transparent.png" alt="Logo"  style={imageStyles} />
    </Link>
    <div class="nav ml-auto"> 
       <Link to="/skill" class="nav-link text-light"><center>
          <button id="findJobButton" style={{marginRight :"2vw"}}>Post a Job</button>
      </center></Link> 
        
       
    </div>        
  </nav>
  );
}

export default Navbar2;

