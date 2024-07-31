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
import { ClockInPage } from "./components/pages/ClockInPage";
import { MyProfilePage } from "./components/pages/MyProfilePage";
import { MainRoomPage } from "./components/pages/roomsPages/MainRoomPage";
import { SmallRoomPage } from "./components/pages/roomsPages/SmallRoomPage";
import { CoolRoomPage } from "./components/pages/roomsPages/CoolRoomPage";
import { EditProfilePage } from "./components/pages/EditProfilePage";
import { ClockOutPage } from "./components/pages/ClockOutPage";

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
            // <ProtectedRoute>
            //   <RoomsPage />
            // </ProtectedRoute>
            <RoomsPage />
          }
        />
        <Route path="room/main-reserve-desk" element={<MainRoomPage />} />
        <Route path="room/small-reserve-desk" element={<SmallRoomPage />} />
        <Route path="room/cool-reserve-desk" element={<CoolRoomPage />} />
        <Route path="/clock-in" element={<ClockInPage />} />
        <Route path="/clock-out" element={<ClockOutPage />} />
        <Route path="/me" element={<MyProfilePage />} />
        <Route path="/editProfile" element={<EditProfilePage />} />
        <Route path="*" element={<Navigate to="room" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
