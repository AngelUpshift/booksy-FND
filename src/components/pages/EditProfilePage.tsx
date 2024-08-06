import { Box, Container, Typography, useTheme } from "@mui/material";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import { ButtonSave } from "../components/ButtonBack/ButtonSave";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { EditProfileForm } from "../components/User/EditProfileForm";

export const EditProfilePage = () => {
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
        <ButtonBack />
        <EditProfileForm />
        <NavigationBar />
      </Box>
    </Container>
  );
};
