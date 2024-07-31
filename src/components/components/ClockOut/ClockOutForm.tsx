import { Box, Button, Typography, useTheme } from "@mui/material";
import logo from "../../../img/alarm-clocks.jpg";

export const ClockOutForm = () => {
  const theme = useTheme();
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "350px", // Fixed width
        width: "100%",
        padding: theme.spacing(2),
        backgroundColor: "white",
        gap: theme.spacing(2),
        left: "32px",
        boxSizing: "border-box", // Ensure padding doesn't cause overflow
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          maxHeight: "100px",
        }}
      >
        <Typography
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "34px",
          }}
          fontSize="24px"
          fontStyle="Roboto"
          fontWeight="700"
        >
          Clock out ! ⏰
        </Typography>
        <Typography
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "34px",
          }}
          fontSize="18px"
          fontStyle="Roboto"
          fontWeight="500"
          color="#686868"
        >
          Your last book for the was in Room 3 Seat 5 on 20/07/2024.
        </Typography>
      </Box>
      <Box
        component="img"
        src={logo}
        sx={{
          width: "232px",
          height: "200px",
          display: "flex",
          left: 121,
          marginTop: "122px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          width: "100%", // Fixed width
          maxWidth: "324px", // Responsive width
          left: 35,
          marginTop: "100px",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          sx={{
            backgroundColor: "#B71C1C",
            height: "50px",
            borderRadius: "100px",
            fontSize: "14px",
            fontStyle: "Roboto",
            lineHeight: "16.8px",
            fontWeight: "700",
            textTransform: "none", // Ensure text is not capitalized
          }}
          href="/room"
        >
          Clock out
        </Button>
      </Box>
    </Box>
  );
};
