import { useTheme } from "@mui/material/styles";
import {
  Box,
  TextField,
  Typography,
  Link,
  Button,
  useMediaQuery,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";
import { validationSchemaLogin } from "./utils";
import { useAppDispatch } from "../../redux/store"; // Use the typed version of useDispatch
import { loginThunk } from "../../redux/slices/authSlice";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(loginThunk(values));
    },
    validationSchema: validationSchemaLogin,
  });

  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "329px", // Fixed width
        width: "100%",
        height: "467px", // Fixed height
        padding: theme.spacing(2),
        backgroundColor: "white",
        gap: theme.spacing(2), // Added gap for spacing between elements
        left: "32px",
        boxSizing: "border-box", // Ensure padding doesn't cause overflow
        paddingTop: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: isSmallScreen ? "100%" : "324px", // Responsive width
          height: "106px", // Fixed height
          gap: "10px",
          opacity: "0px",
        }}
      >
        <Typography
          fontSize={isSmallScreen ? "20px" : "24px"}
          fontWeight="700"
          width={isSmallScreen ? "100%" : "324px"} // Responsive width
          textAlign="left"
          sx={{
            opacity: "0px",
          }}
          fontStyle="Roboto"
          color="#000000"
          lineHeight="33.6px"
        >
          Welcome to Upshift Booksy
        </Typography>
        <Typography
          fontSize={isSmallScreen ? "16px" : "20px"}
          fontWeight="500"
          fontStyle="Roboto"
          textAlign="left"
          color="#3E3E3E"
          sx={{
            opacity: "0px",
            width: isSmallScreen ? "100%" : "298px",
          }}
          lineHeight="28px"
        >
          Use your credentials to login and use the platform
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%", // Fixed width
          maxWidth: isSmallScreen ? "100%" : "324px",
          gap: theme.spacing(1),
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          id="email"
          type="email"
          placeholder="Your Email"
          variant="outlined"
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
          InputProps={{
            style: {
              borderRadius: "10px",
            },
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineOutlinedIcon
                  sx={{ width: "20px", height: "20px" }}
                />
              </InputAdornment>
            ),
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="password"
          type="password"
          placeholder="Your Password"
          variant="outlined"
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
          InputProps={{
            style: {
              borderRadius: "10px",
            },
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon sx={{ width: "20px", height: "20px" }} />
              </InputAdornment>
            ),
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Link
            href="/forgot-password"
            fontSize={isSmallScreen ? "10px" : "12px"}
            fontWeight="600"
            lineHeight="16.8px"
            textAlign="right"
            underline="none"
            fontStyle="Roboto"
            color="#3E3E3E"
          >
            Forgot Password?
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%", // Fixed width
          maxWidth: isSmallScreen ? "100%" : "329px", // Responsive width
          gap: theme.spacing(1.5),
          opacity: "0px",
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
            fontSize: isSmallScreen ? "12px" : "14px",
            fontStyle: "Roboto",
            lineHeight: "16.8px",
            fontWeight: "700",
            textTransform: "none", // Ensure text is not capitalized
          }}
        >
          Log In
        </Button>

        <Typography
          sx={{
            width: "329px",
            height: "20px",
          }}
          fontSize={isSmallScreen ? "12px" : "14px"}
          lineHeight="19.6px"
          fontStyle="Roboto"
          color="#686868"
          textAlign="center"
          fontWeight="600"
        >
          Don't have an account ?
        </Typography>
        <Button
          type="submit"
          variant="outlined"
          size="large"
          fullWidth
          sx={{
            height: "50px",
            borderRadius: "100px",
            fontSize: isSmallScreen ? "12px" : "14px",
            fontStyle: "Roboto",
            fontWeight: "700",
            textTransform: "none", // Ensure text is not capitalized
            backgroundColor: "#FFFFFF",
            lineHeight: "16.8px",
          }}
          href="/register"
        >
          Create an account
        </Button>
      </Box>
    </Box>
  );
};
