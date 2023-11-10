import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FirebaseProvider } from "./context/firebaseContext";
import { UserProvider } from "./context/userContext";
import AppRoutes from "./routes/routes";


function App() {
  return (
    <div >
      <UserProvider>
        <FirebaseProvider >
          <AppRoutes />
        </FirebaseProvider >
      </UserProvider>
    </div>
  );
}

export default App;
