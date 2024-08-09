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
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

interface CalendarProps {
  open: boolean;
  onClose: () => void;
  setCustomDate: (date: Dayjs | null) => void;
  setDuration: (duration: number) => void;
  bookingLogic: () => void;
}

export const Calendar = ({
  open,
  onClose,
  setCustomDate,
  setDuration,
  bookingLogic,
}: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  const handleOkayClick = () => {
    if (selectedDate) {
      setConfirmOpen(true); // Show confirmation dialog
      setCustomDate(selectedDate);
      setDuration(1);
    }
  };
  const handleConfirmClose = () => {
    setConfirmOpen(false); // Close confirmation dialog
  };

  const handleConfirmYes = () => {
    bookingLogic(); // Proceed with booking
    setConfirmOpen(false); // Close confirmation dialog
    onClose(); // Close calendar dialog
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <Dialog
          open={open}
          onClose={onClose}
          aria-labelledby="logout-dialog-title"
          aria-describedby="logout-dialog-description"
        >
          <DialogTitle id="logout-dialog-title">
            <Typography fontSize="18px" fontStyle="Roboto" fontWeight="700">
              Pick a date
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
                Date
              </Typography>
            </DialogContentText>
            <DateCalendar
              views={["month", "day"]}
              showDaysOutsideCurrentMonth
              fixedWeekNumber={5}
              onChange={handleDateChange}
            />
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
              onClick={onClose}
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
              onClick={handleOkayClick}
            >
              Okay
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={confirmOpen}
          onClose={handleConfirmClose}
          aria-labelledby="confirm-dialog-title"
          aria-describedby="confirm-dialog-description"
        >
          <DialogTitle id="confirm-dialog-title">
            <Typography fontSize="18px" fontStyle="Roboto" fontWeight="700">
              Are you sure?
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="confirm-dialog-description">
              <Typography
                fontWeight="400"
                fontSize="14px"
                fontStyle="Roboto"
                lineHeight="19.6px"
              >
                Do you want to proceed with the booking?
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
              onClick={handleConfirmClose}
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
              onClick={handleConfirmYes}
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </LocalizationProvider>
  );
};
