import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes";
import { CarProvider } from "./contexts/CarContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "./env";

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        {/* <AppProvider> */}
        <AuthProvider>
          <CarProvider>
            <AppRoutes />
          </CarProvider>
        </AuthProvider>
        {/* </AppProvider> */}
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
