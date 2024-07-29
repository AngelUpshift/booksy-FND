import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LoginImages } from "../components/Login/LoginImages";
import { LoginForm } from "../components/Login/LoginForm";

export const HomePage = () => {
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
          paddingTop: "70px",
        }}
      >
        <LoginImages />
        <LoginForm />
      </Box>
    </Container>
  );
};
