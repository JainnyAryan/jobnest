import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { UserProvider } from "./context/userContext";
import AppRoutes from "./routes/routes";


function App() {
  return (
    <div >
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </div>
  );
}

export default App;
