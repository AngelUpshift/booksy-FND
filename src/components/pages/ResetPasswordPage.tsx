import { Box, Container, useTheme } from "@mui/material";
import { ResetPasswordImages } from "../components/ResetPassword/ResetPasswordImages";
import { ResetPasswordForm } from "../components/ResetPassword/ResetPasswordForm";

export const ResetPasswordPage = () => {
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
        <ResetPasswordImages />
        <ResetPasswordForm />
      </Box>
    </Container>
  );
};
