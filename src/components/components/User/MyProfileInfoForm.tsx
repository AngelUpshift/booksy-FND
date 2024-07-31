import { Box, Card, CardContent } from "@mui/material";
import logo from "../../../img/Picture.jpg";
export const MyProfileInfoForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        maxWidth: "361px",
        height: "100%",
        maxHeight: "232px",
        backgroundColor: "white",
        position: "absolute",
        top: 156,
        left: 16,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "361px",
          height: "100%",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CardContent>
          <Box
            component="img"
            src={logo}
            sx={{
              width: "100%",
              maxWidth: "154px",
              height: "229px",
              borderRadius: "15px",
              border: "2px",
            }}
          />
          <Box
            component="img"
            src={logo}
            sx={{
              width: "100%",
              maxWidth: "154px",
              height: "229px",
              borderRadius: "15px",
              border: "2px",
            }}
          />
        </CardContent>
      </Card>
    </Box>
  );
};
