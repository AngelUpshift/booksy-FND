import { Box, Typography } from "@mui/material";
import { ButtonBookSeat } from "../ButtonBack/ButtonBookSeat";
import { Available } from "../Rooms/Available";

export const Seat2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: 361,
        height: 71,
      }}
    >
      <Box
        sx={{
          width: 73,
          height: 47,
          top: 44,
          left: 20,
          borderRadius: "4px 0px 0px 0px",
        }}
      >
        <Typography>💺 Seat 2</Typography>
        <Available />
      </Box>
      <Box
        sx={{
          width: 113,
          top: 49,
          padding: " 9px, 16px, 9px, 16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ButtonBookSeat />
      </Box>
    </Box>
  );
};
