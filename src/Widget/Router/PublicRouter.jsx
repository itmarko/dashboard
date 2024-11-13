import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import { Dashboard, Error1, Home, Login, ScrollToTop } from "/src/Widget/import/PublicImport";
import PrivateLayout from "../Layout/PrivateLayout";
import PublicLayout from "../Layout/PublicLayout";
import PrivateRouter from "../Router/PrivateRouter";

const PublicRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          {/* Public Route with Header */}
          <Route
            path="/"
            element={
              <PublicLayout>
                <Home />
              </PublicLayout>
            }
          />
          <Route path="/log-in" element={<Login />} />

          {/* Private Route without Header */}
          <Route element={<PrivateRouter />}>
            <Route
              path="/dashboard"
              element={
                <PrivateLayout>
                  <Outlet />
                </PrivateLayout>
              }
            >
              {/* Define nested routes here */}
              <Route index element={<Dashboard />} />
            </Route>
          </Route>
          <Route path="*" element={<Error1 />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default PublicRouter;
