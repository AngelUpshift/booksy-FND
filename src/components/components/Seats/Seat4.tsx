import { Box, Typography } from "@mui/material";
import { ButtonBookSeat } from "../ButtonBack/ButtonBookSeat";
import { Available } from "../Rooms/Available";
import { IDesk } from "../../../types/desk/desk";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { getDeskThunk } from "../../redux/slices/deskSlice";

interface SeatProps {
  seat: string | IDesk;
}
export const Seat4 = ({ seat }: SeatProps) => {
  const dispatch = useAppDispatch();
  const desk = useAppSelector((state) => state.desk);

  useEffect(() => {
    const defaultQueryParams = {
      search: "",
      sortBy: "createdAt",
      page: 1,
      order: "asc",
    };

    dispatch(getDeskThunk(desk.queryParameters || defaultQueryParams));
  }, [dispatch, desk.queryParameters]);
  console.log("desk", desk);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: 361,
        height: 71,
      }}
    >
      <Box
        sx={{
          width: 73,
          height: 47,
          top: 44,
          left: 20,
          borderRadius: "4px 0px 0px 0px",
        }}
      >
        <Typography>
          💺
          {desk.deskList.map((value) =>
            value._id === seat
              ? value.name.split(" ").pop() + " " + value.shortName
              : ""
          )}
        </Typography>
        <Available />
      </Box>
      <Box
        sx={{
          width: 113,
          top: 49,
          padding: " 9px, 16px, 9px, 16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <ButtonBookSeat /> */}
      </Box>
    </Box>
  );
};
