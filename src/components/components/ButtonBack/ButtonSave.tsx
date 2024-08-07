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
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface ButtonSaveProps {
  onClick: (e: React.FormEvent) => void;
}

export const ButtonSave = ({ onClick }: ButtonSaveProps) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: 89,
        height: 38,
        flexDirection: "column",
        top: 62,
        right: 16,
        position: "absolute",
        borderRadius: 100,
        backgroundColor: "#039ADE",
      }}
    >
      <Button
        sx={{
          width: "100%",
          padding: "9px 16px 9px 16px",
          color: "white",
        }}
        onClick={handleClickOpen}
      >
        <Box
          sx={{
            display: "flex",
            width: 57,
            height: 20,
            flexDirection: "row",
            gap: "4px",
          }}
        >
          {" "}
          <CheckIcon
            sx={{
              width: 20,
              height: 20,
            }}
          />
          <Typography
            sx={{
              width: 33,
              height: 17,
            }}
            fontStyle="Roboto"
            fontWeight="700"
            fontSize="14px"
            lineHeight="18.8px"
            letterSpacing="4%"
            textTransform="none"
          >
            Save
          </Typography>
        </Box>
      </Button>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="save-dialog-title"
        aria-describedby="save-dialog-description"
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
        <DialogTitle id="save-dialog-title">
          <Typography fontSize="18px" fontStyle="Roboto" fontWeight="700">
            Edit Profile
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="save-dialog-description">
            <Typography fontWeight="400" fontSize="14px" fontStyle="Roboto">
              Are you sure you want to save the made changes?{" "}
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
            onClick={onClick}
            autoFocus
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
