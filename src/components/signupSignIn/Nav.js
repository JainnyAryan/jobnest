import {Link,HashRouter,Routes,Route} from "react-router-dom";
import logoImage from "../LOGO/LOGO_transparent.png";
function Nav()
{
    const imageStyles = {
        width: "200px",      
        height: "auto",      
        borderRadius: "30px", 
        
      };
    return(
     
        <nav class="navbar bg-dark" style={{width:'100%'}} >
          <Link to ="/" class="navbar-brand mx-3">
          <img  src={logoImage} alt="Logo"  style={imageStyles} />
          </Link>
                  
        </nav>
    );
}
export default Nav;

