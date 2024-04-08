import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/index.jsx";
import HomePage from "./components/HomePage/index.jsx";
import DashboardPage from "./components/DashboardPage/index.jsx";
import ResponsiveToolbar from "./components/Toolbar/index.jsx";
import LoginPage from "./components/Authentication/index.jsx";
import CameraPage from "./components/Camera/index.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4A4A87",
      light: "#686B9F",
      dark: "#363062",
    },
    secondary: {
      main: "#F9A41A",
      light: "#FAc424",
      dark: "#F87612",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <ResponsiveToolbar />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "camera",
        element: <CameraPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

function PrivateRoute({ children }) {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
