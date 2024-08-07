import { Box, Container, Typography, useTheme } from "@mui/material";
import { MainRoomForm } from "../../components/Rooms/MainRoomForm";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { ButtonBack } from "../../components/ButtonBack/ButtonBack";

export const MainRoomPage = () => {
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
        overflowY: "auto", // Allow vertical scrolling
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
          height: "100%",
        }}
      >
        <ButtonBack />
        <Typography
          sx={{
            width: "100%",
            maxWidth: 361,
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: 16,
            top: 112,
          }}
          fontStyle="Roboto"
          fontSize="24px"
          fontWeight="700"
          lineHeight="33.6px"
        >
          Main Dev Room 🏣
          <Typography> 8 seats / 6 seats available</Typography>
        </Typography>
        <MainRoomForm />
        <NavigationBar />
      </Box>
    </Container>
  );
};
