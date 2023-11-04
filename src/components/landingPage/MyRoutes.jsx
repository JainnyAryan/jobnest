import '../../App.css';
import Navbar from './Navbar';
import { BrowserRouter,HashRouter,Route,Routes,Switch } from "react-router-dom";
import HeroSection from './Landing';
import Login from "../SignIn/Login"
import End from "./End";
function MyRoutes() {
  return (
    <div className='bodyy'>
  <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path ="/find-work" element={<find-work/>}/>
    <Route path ="/applications" element={<student-list/>}/>
    <Route path ="/skill" element={<student-list/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
   </BrowserRouter>
   <HeroSection/>
   <End/>
   </div>
  );
}

export default MyRoutes;
