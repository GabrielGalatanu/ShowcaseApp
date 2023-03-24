import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import CreateShowcasePage from "../pages/createShowcasePage/CreateShowcasePage";
import UserShowcasesPage from "../pages/userShowcasesPage/UserShowcasesPage";

import AuthService from "../services/auth/auth";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-showcase" element={<CreateShowcasePage />} />
          <Route path="/user-showcases" element={<UserShowcasesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const PrivateRoute = () => {
  const auth = AuthService.isAuthenticated();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default AppRouter;
