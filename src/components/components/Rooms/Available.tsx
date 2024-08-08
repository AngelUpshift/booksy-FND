import { Box, Typography } from "@mui/material";

export const Available = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: 64,
        height: 18,
        borderRadius: 4,
        gap: "10px",
        padding: "4px, 6px, 4px, 6px",
        background: "#C8E6C9",
      }}
    >
      <Typography
        sx={{
          width: "100%",
          paddingTop: "2px",
        }}
        fontStyle="Roboto"
        fontSize="10px"
        fontWeight="600"
        lineHeight="14px"
        color="#2A602C "
        textAlign="center"
      >
        AVAILABLE
      </Typography>
    </Box>
  );
};
