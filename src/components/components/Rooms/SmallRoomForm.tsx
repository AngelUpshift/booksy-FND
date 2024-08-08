import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { getRoomThunk } from "../../redux/slices/roomSlice";
import { Seat1 } from "../Seats/Seat1";
import { Seat2 } from "../Seats/Seat2";

export const SmallRoomForm = () => {
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
        width: 361,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        position: "absolute",
        top: 112,
        backgroundColor: "white",
        left: 16,
      }}
    >
      {room.roomList.length > 0 && (
        <>
          <Typography
            sx={{
              width: "100%",
            }}
            fontStyle="Roboto"
            fontSize="24px"
            fontWeight="700"
            lineHeight="33.6px"
          >
            {room.roomList[1]?.name} 🏣
          </Typography>
          <Box
            sx={{
              top: 148,
              width: "250px",
              height: "25px",
              display: "flex",
              flexDirection: "column",
            }}
            color="#686868"
            fontStyle="Roboto"
            fontSize="18px"
            fontWeight="400"
            lineHeight="25.2px"
          >
            {room.roomList[1]?.desks.length} seats / 6 seats available
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              top: 81,
              left: 16,
              width: "100%",
              maxWidth: 361,
              gap: "10px",
            }}
          >
            <Seat1 seat={room.roomList[1]?.desks[0]} />
            <Seat2 seat={room.roomList[1]?.desks[1]} />
          </Box>
        </>
      )}
    </Box>
  );
};
