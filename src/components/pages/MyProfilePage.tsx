import { Box, Container, useTheme } from "@mui/material";
import { MyProfileForm } from "../components/User/MyProfileForm";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { LogoutButton } from "../components/ButtonBack/LogoutButton";
import { MyProfileInfoForm } from "../components/User/MyProfileInfoForm";

export const MyProfilePage = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: theme.spacing(2),
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: theme.spacing(2),
          borderRadius: 2,
          backgroundColor: "white",
          overflow: "hidden", // Prevent overflow
        }}
      >
        <LogoutButton />
        <MyProfileForm />
        <MyProfileInfoForm />
        <NavigationBar />
      </Box>
    </Container>
  );
};
