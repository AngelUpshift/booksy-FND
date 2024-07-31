import { Box, Typography } from "@mui/material";

export const SmallRoomForm = () => {
  return (
    <Box
      sx={{
        width: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        height: "34px",
        position: "absolute",
        top: 112,
        backgroundColor: "white",
        left: 16,
      }}
    >
      <Typography
        sx={{
          width: "100%",
        }}
        fontStyle="Roboto"
        fontSize="24px"
        fontWeight="700"
        lineHeight="33.6px"
      >
        Small Boss Room 🏣
      </Typography>
      <Box
        sx={{
          top: 148,
          width: "250px",
          height: "25px",
          display: "flex",
          flexDirection: "column",
        }}
        color="#686868"
        fontStyle="Roboto"
        fontSize="18px"
        fontWeight="400"
        lineHeight="25.2px"
      >
        8 seats / 6 seats available
      </Box>
    </Box>
  );
};
