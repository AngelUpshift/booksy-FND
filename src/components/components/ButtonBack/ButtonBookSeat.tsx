import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Calendar } from "./Calendar";

export const ButtonBookSeat = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // const BookingLogic=()=>{
  // dispatch(postBookingThunk())
  //}
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [customDate, setCustomDate] = useState<Dayjs | null>(dayjs());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const handleCalendarOpen = () => {
    setCalendarOpen(true);
  };
  const handleCalendarClose = () => {
    setCalendarOpen(false);
  };

  const handleDateChange = (newValue: Dayjs | null) => {
    setCustomDate(newValue);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        >
          <DialogTitle id="logout-dialog-title">
            <Typography fontSize="18px" fontStyle="Roboto" fontWeight="700">
              Book a seat
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="logout-dialog-description">
              <Typography
                fontWeight="400"
                fontSize="14px"
                fontStyle="Roboto"
                lineHeight="19.6px"
              >
                Select the frequency you would like to be at this seat:
              </Typography>
            </DialogContentText>

            <FormControl component="fieldset">
              <RadioGroup
                value={selectedValue}
                onChange={handleChange}
                sx={{
                  "& .MuiRadio-root": {
                    width: "16px",
                    height: "16px",
                    padding: "1.33px",
                  },
                }}
              >
                <FormControlLabel
                  value="Next day"
                  control={<Radio />}
                  label="Next day"
                />
                <FormControlLabel
                  value="Three days in a row"
                  control={<Radio />}
                  label="Three days in a row"
                />
                <FormControlLabel
                  value="Five days in a row"
                  control={<Radio />}
                  label="Five days in a row"
                />
                <FormControlLabel
                  value="Ten days in a row"
                  control={<Radio />}
                  label="Ten days in a row"
                />
                <FormControlLabel
                  value="Custom day"
                  control={<Radio />}
                  label="Custom day"
                  onClick={handleCalendarOpen}
                />
              </RadioGroup>
            </FormControl>
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
              autoFocus
            >
              Okay
            </Button>
          </DialogActions>
        </Dialog>
        <Calendar open={calendarOpen} onClose={handleCalendarClose} />
      </Box>
    </LocalizationProvider>
  );
};
