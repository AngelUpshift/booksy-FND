import { Box, Typography, useTheme } from "@mui/material";
import { Seat1 } from "../Seats/Seat1";
import { Seat2 } from "../Seats/Seat2";
import { Seat3 } from "../Seats/Seat3";
import { Seat4 } from "../Seats/Seat4";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { getRoomThunk } from "../../redux/slices/roomSlice";
import { Seat5 } from "../Seats/Seat5";
import { Seat6 } from "../Seats/Seat6";
import { Seat7 } from "../Seats/Seat7";
import { Seat8 } from "../Seats/Seat8";

export const MainRoomForm = () => {
  const theme = useTheme();
  const room = useAppSelector((state) => state.room);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const defaultQueryParams = {
      search: "",
      sortBy: "createdAt",
      page: 1,
      order: "asc",
    };

    dispatch(getRoomThunk(room.queryParameters || defaultQueryParams));
  }, [dispatch, room.queryParameters]);
  console.log(
    "seat",
    room.roomList.length > 0 ? room.roomList[0].desks[1] : "nop"
  );

  console.log("HEREHEHERHE", room.roomList[0].desks[3]);

  return (
    <Box
      sx={{
        width: "361px",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        alignItems: "center",
        top: 193,
        overflowY: "auto", // Allow vertical scrolling
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            width: "100%",
          }}
          fontStyle="Roboto"
          fontSize="16px"
          fontWeight="700"
          lineHeight="22.4px"
        >
          Left side seats
        </Typography>
        <Seat1 seat={room.roomList[0].desks[0]} />
        <Seat2 seat={room.roomList[0].desks[1]} />
      </Box>
      <Box
        sx={{ width: "100%", maxWidth: 361, border: 1, color: "#C5C5C7 " }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: 361,
          top: 204,
        }}
      >
        <Typography
          sx={{
            width: "100%",
          }}
          fontStyle="Roboto"
          fontSize="16px"
          fontWeight="700"
          lineHeight="22.4px"
        >
          Middle seats
        </Typography>
        <Seat3 seat={room.roomList[0].desks[2]} />
        <Seat4 seat={room.roomList[0].desks[3]} />
        <Seat5 seat={room.roomList[0].desks[4]} />
        <Seat6 seat={room.roomList[0].desks[5]} />
      </Box>
      <Box
        sx={{ width: "100%", maxWidth: 361, border: 1, color: "#C5C5C7 " }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: 361,
          width: "100%",
        }}
      >
        <Typography
          sx={{
            width: "100%",
          }}
          fontStyle="Roboto"
          fontSize="16px"
          fontWeight="700"
          lineHeight="22.4px"
        >
          Window seats
        </Typography>
        <Seat7 seat={room.roomList[0].desks[6]} />
        <Seat8 seat={room.roomList[0].desks[7]} />
      </Box>
    </Box>
  );
};
