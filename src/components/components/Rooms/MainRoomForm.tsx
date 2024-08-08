import { Box, Typography, useTheme } from "@mui/material";
import { Seat1 } from "../Seats/Seat1";
import { Seat2 } from "../Seats/Seat2";
import { Seat3 } from "../Seats/Seat3";
import { Seat4 } from "../Seats/Seat4";

export const MainRoomForm = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "361px",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        alignItems: "center",
        top: 193,
        overflowY: "auto", // Allow vertical scrolling
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            width: "100%",
          }}
          fontStyle="Roboto"
          fontSize="16px"
          fontWeight="700"
          lineHeight="22.4px"
        >
          Left side seats
        </Typography>
        <Seat1 />
        <Seat2 />
      </Box>
      <Box
        sx={{ width: "100%", maxWidth: 361, border: 1, color: "#C5C5C7 " }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: 361,
          top: 204,
        }}
      >
        <Typography
          sx={{
            width: "100%",
          }}
          fontStyle="Roboto"
          fontSize="16px"
          fontWeight="700"
          lineHeight="22.4px"
        >
          Middle seats
        </Typography>
        <Seat1 />
        <Seat2 />
        <Seat3 />
        <Seat4 />
      </Box>
      <Box
        sx={{ width: "100%", maxWidth: 361, border: 1, color: "#C5C5C7 " }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: 361,
          width: "100%",
        }}
      >
        <Typography
          sx={{
            width: "100%",
          }}
          fontStyle="Roboto"
          fontSize="16px"
          fontWeight="700"
          lineHeight="22.4px"
        >
          Window seats
        </Typography>
        <Seat1 />
        <Seat2 />
      </Box>
    </Box>
  );
};
