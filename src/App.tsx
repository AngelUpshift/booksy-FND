import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { ForgotPasswordPage } from "./components/pages/ForgotPasswordPage";
import { ResetPasswordPage } from "./components/pages/ResetPasswordPage";
import { RoomsPage } from "./components/pages/RoomsPage";
import { ProtectedRoute } from "./components/routes/ProtectedRoute";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#039ADE",
      },
      secondary: {
        main: "#E86767",
      },
    },
    typography: {},
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster />
      <Routes>
        <Route path="login" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="reset-password/:token" element={<ResetPasswordPage />} />
        <Route
          path="room"
          element={
            <ProtectedRoute>
              <RoomsPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="room" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
