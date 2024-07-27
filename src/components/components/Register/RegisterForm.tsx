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
import { useFormik } from "formik";
import { validationSchemaRegister } from "./utils";
import { useAppDispatch } from "../../redux/store";
import { registerThunk } from "../../redux/slices/authSlice";

export const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      team: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(registerThunk(values));
    },
    validationSchema: validationSchemaRegister,
  });

  const theme = useTheme();

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "329px", // Fixed width
        padding: theme.spacing(2),
        backgroundColor: "white",
        gap: "25px", // Added gap for spacing between elements
        left: "32px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          top: "292px",
          height: "34px",
        }}
      >
        <Typography
          sx={{
            fontStyle: "Roboto",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "33.6px",
          }}
        >
          Create an Account
        </Typography>
      </Box>
      <Box
        sx={{
          width: "324px",
          top: "356px",
          left: "35px",
          gap: "8px",
          display: "flex", // Added display flex
          flexDirection: "column", // Set flex direction to column
        }}
      >
        <TextField
          id="first_name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            height: "42px",
            width: "100%",
            marginBottom: "11px",
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
          error={formik.touched.first_name && Boolean(formik.errors.first_name)}
          helperText={formik.touched.first_name && formik.errors.first_name}
        ></TextField>
        <TextField
          id="last_name"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            marginBottom: "11px",

            height: "42px",
            width: "100%",
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
          error={formik.touched.last_name && Boolean(formik.errors.last_name)}
          helperText={formik.touched.last_name && formik.errors.last_name}
        ></TextField>
        <FormControl
          fullWidth
          error={formik.touched.team && Boolean(formik.errors.team)}
        >
          <Select
            id="team"
            name="team"
            value={formik.values.team}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            displayEmpty
            sx={{
              height: "42px",
              width: "100%",
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
              value="FND"
            >
              FrontEnd
            </MenuItem>
            <MenuItem
              sx={{
                fontStyle: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "19.6px",
                color: "#686868",
              }}
              value="BND"
            >
              BackEnd
            </MenuItem>
            <MenuItem
              sx={{
                fontStyle: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "19.6px",
                color: "#686868",
              }}
              value="Design"
            >
              Design
            </MenuItem>
            <MenuItem
              sx={{
                fontStyle: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "19.6px",
                color: "#686868",
              }}
              value="QA"
            >
              Quality assurance
            </MenuItem>
            <MenuItem
              sx={{
                fontStyle: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "19.6px",
                color: "#686868",
              }}
              value="HR"
            >
              Human resources
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="email"
          value={formik.values.email}
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            marginBottom: "11px",

            height: "42px",
            width: "100%",
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
          placeholder="Email"
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
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        ></TextField>
        <TextField
          id="password"
          value={formik.values.password}
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            height: "42px",
            width: "100%",
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
          placeholder="Password"
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
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        ></TextField>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "324px", // Fixed width
          height: "144px", // Fixed height
          gap: "12px",
          opacity: "0px",
          left: "35px",
        }}
      >
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

        <Typography
          sx={{
            width: "100%",
            height: "20px",
          }}
          fontSize="14px"
          lineHeight="19.6px"
          fontStyle="Roboto"
          color="#686868"
          textAlign="center"
          fontWeight="600"
        >
          Already have an account?
        </Typography>
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
  );
};
