import { Box } from "@mui/material";
import logo from "../../../img/login/Booksy-logos-blue.psd.jpg";

export const RegisterImages = () => {
  return (
    <Box
      component="img"
      src={logo}
      sx={{
        width: "100%",
        maxWidth: "239px",
        marginBottom: 2,
      }}
    />
  );
};
