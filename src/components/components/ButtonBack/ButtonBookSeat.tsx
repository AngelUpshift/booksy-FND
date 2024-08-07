import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../redux/store";
import { postBookingThunk } from "../../redux/slices/bookingSlice";

export const ButtonBookSeat = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  // const BookingLogic=()=>{
  // dispatch(postBookingThunk())
  //}

  const handleClickClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: 113,
        height: 38,
        left: 236,
        position: "absolute",
      }}
    >
      <Button
        sx={{
          width: "100%",
          height: 38,
          gap: "8px",
          borderRadius: "100px",
          padding: "1.5px 0px 1.5px 0px",
        }}
        variant="contained"
        onClick={handleClickOpen}
      >
        <Typography
          sx={{ width: "100%" }}
          fontSize="14px"
          fontWeight="700"
          lineHeight="16.8px"
          textAlign="center"
          textTransform="none"
        >
          Book a Seat
        </Typography>
      </Button>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="logout-dialog-title"
        aria-describedby="logout-dialog-description"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "20px",
          },
        }}
      >
        <CloseIcon
          sx={{
            width: 20,
            height: 20,
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            top: 10,
            right: 10,
          }}
          onClick={handleClickClose}
        />
        <DialogTitle id="logout-dialog-title">
          <Typography fontSize="18px" fontStyle="Roboto" fontWeight="700">
            Log out
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="logout-dialog-description">
            <Typography fontWeight="400" fontSize="14px" fontStyle="Roboto">
              Are you sure you want to logout ?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            size="medium"
            sx={{
              borderRadius: "100px",
              backgroundColor: "#DBDBDD",
              textTransform: "none",
              color: "gray",
            }}
            onClick={handleClickClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            size="medium"
            sx={{
              height: 38,
              padding: "9px 16px 9px 16px",
              borderRadius: "100px",
              textTransform: "none",
            }}
            // onClick={}
            autoFocus
          >
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
