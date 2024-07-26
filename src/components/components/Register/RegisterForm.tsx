import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person"; // Import the Person icon
import { Email, Lock } from "@mui/icons-material";

export const RegisterForm = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "329px", // Fixed width
        height: "467px", // Fixed height
        padding: theme.spacing(2),
        backgroundColor: "white",
        gap: "50px", // Added gap for spacing between elements
        top: "292px",
        left: "32px",
      }}
    >
      <Typography
        sx={{
          width: "100%",
          height: "34px",
          top: "292px",
          left: "92px",
          textAlign: "center",
          fontStyle: "Roboto",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "33.6px",
        }}
      >
        Create an Account
      </Typography>
      <Box
        sx={{
          width: "324px",
          height: "242px",
          top: "356px",
          left: "35px",
        }}
      >
        <TextField
          sx={{
            height: "42px",
            width: "100%",
            marginBottom: "8px",
            "& .MuiInputBase-root": {
              height: "100%",
            },
            "& .MuiOutlinedInput-root": {
              height: "100%",
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: "14px",
            },
          }}
          placeholder="First Name"
          variant="outlined"
          InputProps={{
            style: {
              borderRadius: "10px",
            },
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{ width: "20px", height: "20px" }} />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          sx={{
            height: "42px",
            width: "100%",
            marginBottom: "8px",
            "& .MuiInputBase-root": {
              height: "100%",
            },
            "& .MuiOutlinedInput-root": {
              height: "100%",
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: "14px",
            },
          }}
          placeholder="Last Name"
          variant="outlined"
          InputProps={{
            style: {
              borderRadius: "10px",
            },
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{ width: "20px", height: "20px" }} />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <FormControl fullWidth>
          <Select
            value=""
            variant="outlined"
            displayEmpty
            sx={{
              height: "42px",
              width: "100%",
              marginBottom: "8px",
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                padding: "0 14px", // Adjust padding as needed
              },
              "& .MuiOutlinedInput-root": {
                height: "100%",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "10px",
              },
            }}
            renderValue={(selected) => {
              if (selected === "") {
                return (
                  <Typography
                    sx={{
                      width: "77px",
                      height: "20px",
                      top: "11px",
                      left: "12px",
                      fontStyle: "Roboto",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "19.6px",
                      color: "#686868",
                    }}
                  >
                    Select Team
                  </Typography>
                );
              }
              return selected;
            }}
          >
            {" "}
            <MenuItem
              sx={{
                fontStyle: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "19.6px",
                color: "#686868",
              }}
              value="option1"
            >
              Option 1
            </MenuItem>
            <MenuItem
              sx={{
                fontStyle: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "19.6px",
                color: "#686868",
              }}
              value="option2"
            >
              Option 2
            </MenuItem>
            <MenuItem
              sx={{
                fontStyle: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "19.6px",
                color: "#686868",
              }}
              value="option3"
            >
              Option 3
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{
            height: "42px",
            width: "100%",
            marginBottom: "8px",
            "& .MuiInputBase-root": {
              height: "100%",
            },
            "& .MuiOutlinedInput-root": {
              height: "100%",
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: "14px",
            },
          }}
          placeholder="Last Name"
          variant="outlined"
          InputProps={{
            style: {
              borderRadius: "10px",
            },
            startAdornment: (
              <InputAdornment position="start">
                <Email sx={{ width: "20px", height: "20px" }} />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          sx={{
            height: "42px",
            width: "100%",
            marginBottom: "8px",
            "& .MuiInputBase-root": {
              height: "100%",
            },
            "& .MuiOutlinedInput-root": {
              height: "100%",
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: "14px",
            },
          }}
          placeholder="Last Name"
          variant="outlined"
          InputProps={{
            style: {
              borderRadius: "10px",
            },
            startAdornment: (
              <InputAdornment position="start">
                <Lock sx={{ width: "20px", height: "20px" }} />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Box>
      <Box
        sx={{
          width: "324px", // Fixed width
          height: "144px", // Fixed height
          gap: "12px",
          opacity: "0px",
          left: "35px",
          top: "618px",
        }}
      >
        <Box width="100%" height="50px">
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              height: "50px",
              borderRadius: "100px",
              fontSize: "14px",
              fontStyle: "Roboto",
              lineHeight: "16.8px",
              fontWeight: "700",
              textTransform: "none", // Ensure text is not capitalized
            }}
          >
            Create Account
          </Button>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "20px",
            paddingTop: "10px",
          }}
          fontSize="14px"
          lineHeight="19.6px"
          fontStyle="Roboto"
          color="#686868"
          textAlign="center"
          fontWeight="600"
        >
          <span>Already have an account</span>
        </Box>
        <Box width="100%" height="50px" paddingTop="15px">
          <Button
            type="submit"
            variant="outlined"
            size="large"
            fullWidth
            sx={{
              height: "50px",
              borderRadius: "100px",
              fontSize: "14px",
              fontStyle: "Roboto",
              fontWeight: "700",
              textTransform: "none", // Ensure text is not capitalized
              backgroundColor: "#FFFFFF",
              lineHeight: "16.8px",
            }}
            href="/login"
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
