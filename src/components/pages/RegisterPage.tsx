import { Box, Button, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { RegisterImages } from "../components/Register/RegisterImages";
import { ChevronLeft } from "@mui/icons-material"; // Import the icon
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
        }}
      >
        <Box
          sx={{
            alignSelf: "flex-start",
            left: "16px",
            width: "89px",
            height: "38px",
            top: "62px",
          }}
        >
          <Button
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "100px",
              backgroundColor: "#DBDBDD",
              fontStyle: "Roboto",
              fontWeight: "700",
              fontSize: "14px",
              textAlign: "center",
              color: "#686868",
              textTransform: "none", // Ensure text is not capitalized
            }}
            href="/login"
          >
            <ChevronLeft sx={{ width: "20px", height: "20px" }} />
            Back
          </Button>
        </Box>

        <RegisterImages />
        <RegisterForm />
      </Box>
    </Container>
  );
};
