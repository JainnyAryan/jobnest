import '../../App.css';
import Navbar from './Navbar';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,HashRouter,Route,Routes,Switch } from "react-router-dom";
import HeroSection from './Landing';
import End from "./End";
function LandingPage() {
  return (
    <div className='bodyy'>
  <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path ="/find-work" element={<find-work/>}></Route>
    <Route path ="/applications" element={<student-list/>}></Route>
    <Route path ="/skill" element={<student-list/>}></Route>
   </Routes>
   </BrowserRouter>
   <HeroSection/>
   <End/>
   </div>
  );
}

export default LandingPage;
