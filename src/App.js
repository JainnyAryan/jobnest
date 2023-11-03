import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/employee/Nav";
import Footer from "./components/employee/Footer";
import PostAJob from "./components/employee/PostAJob";
// import { FindJobDash } from "./components/employee/FindJobDash";
import EmployerPanel from "./components/employer/EmployerPanel";
import LandingPage from "./components/landingPage/LandingPage"
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import HeroSection from "./components/landingPage/Landing";

function App() {
  return (
    <div >
    <LandingPage />
    </div>
  );
}

export default App;
