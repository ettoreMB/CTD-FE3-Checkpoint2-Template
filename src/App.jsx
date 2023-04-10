
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./Routes/AppRoutes";
import Layout from "./Components/Layout";
import AuthProvider from "./context/auth-context";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
