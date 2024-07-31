import { Box, Container, useTheme } from "@mui/material";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { ButtonBack } from "../../components/ButtonBack/ButtonBack";
import { CoolRoomForm } from "../../components/Rooms/CoolRoomForm";

export const CoolRoomPage = () => {
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
        <CoolRoomForm />
        <NavigationBar />
      </Box>
    </Container>
  );
};
