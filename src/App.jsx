import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/employee/Nav";
import Footer from "./components/employee/Footer";
import PostAJob from "./components/employee/PostAJob";
import EmployerPanel from "./components/employer/EmployerPanel";
import HeroSection from "./components/landingPage/Landing";
import AppRoutes from "./routes/routes";


function App() {
  return (
    <div >
    <AppRoutes />
    </div>
  );
}

export default App;
