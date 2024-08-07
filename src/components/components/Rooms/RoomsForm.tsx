import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import logo from "../../../img/login/room/Weather Widget.jpg";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { getRoomThunk } from "../../redux/slices/roomSlice";

export const RoomsForm = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const room = useAppSelector((state) => state.room);

  useEffect(() => {
    const defaultQueryParams = {
      search: "",
      sortBy: "createdAt",
      page: 1,
      order: "asc",
    };

    dispatch(getRoomThunk(room.queryParameters || defaultQueryParams));
  }, [dispatch, room.queryParameters]);

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
      <Typography
        sx={{
          width: "350px",
          height: "34px",
          left: "16px",
        }}
        fontStyle="Roboto"
        fontWeight="700"
        fontSize="24px"
        lineHeight="33.6px"
      >
        Wellcome to Booksy 🏤{" "}
      </Typography>
      <Typography
        sx={{ width: "350px", height: "50px", left: "16px" }}
        fontStyle="Roboto"
        fontWeight="500"
        lineHeight="25.2px"
        fontSize="18px"
        color="#3E3E3E"
      >
        Your last book was in room here on date ...................
      </Typography>
      <Box
        component="img"
        src={logo}
        sx={{
          left: "25px",
          width: "100%",
        }}
      />
      <Box
        sx={{
          width: "100%",
          maxWidth: "361px",
          height: "282px",
          left: "16px",
          gap: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link to="/room/main-reserve-desk" style={{ textDecoration: "none" }}>
          <Card
            sx={{
              width: "361px",
              height: "86px",
              borderRadius: "20px", // Added borderRadius here
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  width: "100%",
                  height: "25px",
                  left: "12px",
                  paddingTop: "3px",
                }}
                fontStyle="Roboto"
                fontWeight="700"
                fontSize="18px"
                component="div"
                color="#000000"
              >
                {room.roomList[0].name}
              </Typography>
              <Typography
                sx={{
                  width: "249px",
                  height: "25px",
                  left: "12px",
                  paddingTop: "16px",
                }}
                component="div"
              >
                {room.roomList[0].desks.length} seats total / 6 seats available
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link to="/room/small-reserve-desk" style={{ textDecoration: "none" }}>
          <Card
            sx={{
              width: "361px",
              height: "86px",
              borderRadius: "20px", // Added borderRadius here
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  width: "100%",
                  height: "25px",
                  left: "12px",
                  paddingTop: "3px",
                }}
                fontStyle="Roboto"
                fontWeight="700"
                fontSize="18px"
                component="div"
              >
                {room.roomList[1].name}
              </Typography>
              <Typography
                sx={{
                  width: "249px",
                  height: "25px",
                  left: "12px",
                  paddingTop: "16px",
                }}
                component="div"
              >
                {room.roomList[1].desks.length} seats total / 6 seats available
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link to="/room/cool-reserve-desk" style={{ textDecoration: "none" }}>
          <Card
            sx={{
              width: "361px",
              height: "86px",
              borderRadius: "20px", // Added borderRadius here
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  width: "100%",
                  height: "25px",
                  left: "12px",
                  paddingTop: "3px",
                }}
                fontStyle="Roboto"
                fontWeight="700"
                fontSize="18px"
                component="div"
              >
                {room.roomList[2].name}
              </Typography>
              <Typography
                sx={{
                  width: "249px",
                  height: "25px",
                  left: "12px",
                  paddingTop: "16px",
                }}
                component="div"
              >
                {room.roomList[2].desks.length} seats total / 6 seats available
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Box>
    </Box>
  );
};
