import { Box, Container, useTheme } from "@mui/material";
import { RoomsForm } from "../components/Rooms/RoomsForm";

export const RoomsPage = () => {
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
        <RoomsForm />
      </Box>
    </Container>
  );
};
