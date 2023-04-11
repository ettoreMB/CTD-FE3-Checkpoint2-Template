
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./Routes/AppRoutes";
import Layout from "./Components/Layout";
import AuthProvider from "./context/auth-context";
import ThemeProvider from "./context/theme-context";

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
        <AuthProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </AuthProvider>
    </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
