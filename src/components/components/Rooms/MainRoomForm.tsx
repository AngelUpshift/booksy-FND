import { Box, Button, Typography, useTheme } from "@mui/material";

export const MainRoomForm = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "350px",
        padding: theme.spacing(2),
        backgroundColor: "white",
        gap: theme.spacing(1.5),
      }}
    >
      <Button
        sx={{
          borderRadius: "100px",
          backgroundColor: "#DBDBDD",
        }}
      >
        <Typography>Back</Typography>
      </Button>
    </Box>
  );
};
