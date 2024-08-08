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
}

export const Calendar = ({ open, onClose }: CalendarProps) => {
  const [customDate, setCustomDate] = useState<Dayjs | null>(dayjs());

  const handleDateChange = (newValue: Dayjs | null) => {
    setCustomDate(newValue);
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
            >
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </LocalizationProvider>
  );
};
