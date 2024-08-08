import { Box, Container, Typography, useTheme } from "@mui/material";
import { MainRoomForm } from "../../components/Rooms/MainRoomForm";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { ButtonBack } from "../../components/ButtonBack/ButtonBack";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { getRoomThunk } from "../../redux/slices/roomSlice";

export const MainRoomPage = () => {
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
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: theme.spacing(2),
        overflowY: "auto", // Allow vertical scrolling
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: theme.spacing(2),
          borderRadius: 2,
          backgroundColor: "white",
          overflow: "hidden", // Prevent overflow
          height: "100%",
        }}
      >
        <ButtonBack />
        {room.roomList.length > 0 && (
          <>
            <Typography
              sx={{
                width: "100%",
                maxWidth: 361,
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                left: 16,
                top: 112,
              }}
              fontStyle="Roboto"
              fontSize="24px"
              fontWeight="700"
              lineHeight="33.6px"
            >
              {room.roomList[0]?.name} 🏣
              <Typography>
                {" "}
                {room.roomList[0]?.desks.length} seats / 6 seats available
              </Typography>
            </Typography>
            <MainRoomForm />
          </>
        )}
        <NavigationBar />
      </Box>
    </Container>
  );
};
