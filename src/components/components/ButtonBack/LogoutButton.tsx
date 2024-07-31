import { ArrowBackIosOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export const LogoutButton = () => {
  return (
    <Box
      sx={{
        width: "32px",
        display: "flex",
        alignItems: "center",
        height: "32px",
        position: "absolute",
        top: 70,
        backgroundColor: "white",
        right: 15,
      }}
    >
      <Link to="/login">
        <LogoutIcon
          sx={{
            width: "100%",
            height: "100%",
            color: "#B71C1C",
            display: "flex",
            top: 4,
            left: 2,
          }}
        />
      </Link>
    </Box>
  );
};
