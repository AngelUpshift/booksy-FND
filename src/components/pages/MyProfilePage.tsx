import { Box, Container, Typography, Grid } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";
import logo from "../../img/Picture.jpg";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import LogoutIcon from "@mui/icons-material/Logout";

export const MyProfilePage = () => {
  return (
    <Container
      component="form"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: 2,
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Logout Icon */}
      <Link to="/login" style={{ position: "absolute", top: 70, right: 16 }}>
        <LogoutIcon
          sx={{
            width: 32,
            height: 32,
            color: "#B71C1C",
          }}
        />
      </Link>
      {/* Profile Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          mt: 9,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="700"
            fontStyle="Roboto"
            fontSize="24px"
          >
            Emily’s Profile
          </Typography>
          <Link to="/editProfile">
            <SettingsOutlinedIcon
              sx={{
                ml: 1,
                mt: 0.5,
                width: 32,
                height: 32,
                color: "#039ADE",
              }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            borderRadius: 2,
            padding: 2,
            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Emily Benefield"
            sx={{
              width: 154,
              height: 229,
              mr: 2,
              borderRadius: 2,
            }}
          />
          <Box sx={{ width: 181, height: 232 }}>
            <Typography variant="h6" fontWeight="700" fontSize="32px">
              Emily Benefield
            </Typography>
            <Typography variant="body2" color="#686868" fontSize="10px">
              Email
            </Typography>
            <Typography variant="body2" color="black" fontSize="14px">
              emilybenefield@hotmail.com
            </Typography>
            <Typography variant="body2" color="#686868" fontSize="10px">
              Date of Birth:
            </Typography>
            <Typography variant="body2" color="black" fontSize="14px">
              December 07, 2020
            </Typography>
            <Typography variant="body2" color="#686868" fontSize="10px">
              Team
            </Typography>
            <Typography variant="body2" color="black" fontSize="14px">
              Product team
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Info Section */}
      <Box sx={{ width: "100%", mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                backgroundColor: "white",
                padding: 2,
                borderRadius: 2,
                textAlign: "center",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                height: "160px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                fontSize="50px"
                fontStyle="Roboto"
              >
                17
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                fontSize="18px"
                fontWeight="400"
                fontStyle="Roboto"
              >
                Info 1
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                backgroundColor: "white",
                padding: 2,
                borderRadius: 2,
                textAlign: "center",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                height: "160px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                fontSize="50px"
                fontStyle="Roboto"
              >
                92%
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                fontSize="18px"
                fontWeight="400"
                fontStyle="Roboto"
              >
                Info 2
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                backgroundColor: "white",
                padding: 2,
                borderRadius: 2,
                textAlign: "center",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                height: "160px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                fontSize="50px"
                fontStyle="Roboto"
              >
                5
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                fontSize="18px"
                fontWeight="400"
                fontStyle="Roboto"
              >
                Info 3
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                backgroundColor: "white",
                padding: 2,
                borderRadius: 2,
                textAlign: "center",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                height: "160px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                fontSize="50px"
                fontStyle="Roboto"
              >
                243
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                fontSize="18px"
                fontWeight="400"
                fontStyle="Roboto"
              >
                Info 4
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <NavigationBar />
    </Container>
  );
};
