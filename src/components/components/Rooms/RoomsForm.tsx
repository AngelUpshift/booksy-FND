import { Box, Card, Typography, useTheme } from "@mui/material";
import logo from "../../../img/login/room/Weather Widget.jpg";

export const RoomsForm = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "350px",
        height: "276px",
        padding: theme.spacing(2),
        backgroundColor: "white",
        gap: "12px",
      }}
    >
      <Typography
        sx={{
          width: "350px",
          height: "34px",
          left: "16px",
        }}
        fontStyle="Roboto"
        fontWeight="700"
        fontSize="24px"
        lineHeight="33.6px"
      >
        Wellcome to Booksy 🏤{" "}
      </Typography>
      <Typography
        sx={{ width: "350px", height: "50px", left: "16px" }}
        fontStyle="Roboto"
        fontWeight="500"
        lineHeight="25.2px"
        fontSize="18px"
        color="#3E3E3E"
      >
        Your last book was in room here on date ...................
      </Typography>
      <Box
        component="img"
        src={logo}
        sx={{
          width: "100%",
        }}
      ></Box>
      <Card></Card>
    </Box>
  );
};
