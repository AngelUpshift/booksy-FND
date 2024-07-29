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
        <ResetPasswordImages />
        <ResetPasswordForm />
      </Box>
    </Container>
  );
};
