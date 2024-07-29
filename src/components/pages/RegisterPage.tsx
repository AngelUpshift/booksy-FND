import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { RegisterImages } from "../components/Register/RegisterImages";
import { RegisterForm } from "../components/Register/RegisterForm";

export const RegisterPage = () => {
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
        <RegisterImages />
        <RegisterForm />
      </Box>
    </Container>
  );
};
