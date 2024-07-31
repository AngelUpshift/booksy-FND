import { Box, Container, useTheme } from "@mui/material";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { ClockOutForm } from "../components/ClockOut/ClockOutForm";

export const ClockOutPage = () => {
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
        position: "absolute",
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
          overflow: "hidden",
        }}
      >
        <ClockOutForm />
        <NavigationBar />
      </Box>
    </Container>
  );
};
