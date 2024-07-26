import { useTheme } from "@mui/material/styles";
import { Box, TextField, Typography, Link, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Email as EmailIcon, Lock as LockIcon } from "@mui/icons-material";
import { useFormik } from "formik";
import { validationSchema } from "./utils";
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
    validationSchema: validationSchema,
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
        height: "467px", // Fixed height
        padding: theme.spacing(2),
        backgroundColor: "white",
        gap: "50px", // Added gap for spacing between elements
        top: "292px",
        left: "32px",
      }}
    >
      <Box
        sx={{
          width: "324px", // Fixed width
          height: "106px", // Fixed height
          gap: "0px",
          opacity: "0px",
        }}
      >
        <Typography
          fontSize="24px"
          fontWeight="700"
          width="324px"
          height="34px"
          textAlign="left"
          sx={{
            gap: "0px",
            opacity: "0px",
          }}
          fontStyle="Roboto"
          color="#000000"
          lineHeight="33.6px"
        >
          Welcome to Upshift Booksy
        </Typography>
        <Typography
          fontSize="20px"
          fontWeight="500"
          fontStyle="Roboto"
          width="298px"
          height="56px"
          textAlign="left"
          color="#3E3E3E"
          sx={{
            top: "50px",
            gap: "0px",
            opacity: "0px",
          }}
          lineHeight="28px"
        >
          Use your credentials to login and use the platform
        </Typography>
      </Box>
      <Box
        sx={{
          width: "324px", // Fixed width
          height: "117px", // Fixed height
          gap: "0px",
          opacity: "0px",
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
                <EmailIcon sx={{ width: "20px", height: "20px" }} />
              </InputAdornment>
            ),
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          //   InputLabelProps={{
          //     sx: {
          //       left: "0px",
          //       "&.MuiInputLabel-shrink": {
          //         left: "0px",
          //       },
          //     },
          //   }}
        />
        <TextField
          id="password"
          type="password"
          placeholder="Your Password"
          variant="outlined"
          sx={{
            height: "42px",
            width: "100%",
            marginTop: "20px",
            "& .MuiInputBase-root": {
              height: "100%",
            },
            "& .MuiOutlinedInput-root": {
              height: "100%",
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: "14px",
            },
            // "& .MuiInputLabel-root": {
            //   top: "-8px",
            // },
          }}
          InputProps={{
            style: {
              borderRadius: "10px",
            },
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ width: "20px", height: "20px" }} />
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
            marginTop: "20px",
          }}
        >
          <Link
            href="/forgot-password"
            fontSize="12px"
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
          width: "329px", // Fixed width
          height: "144px", // Fixed height
          gap: "12px",
          opacity: "0px",
        }}
      >
        <Box width="329px" height="50px">
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
            Log In
          </Button>
        </Box>

        <Box
          sx={{
            width: "329px",
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
          <span>Don't have an account ?</span>
        </Box>
        <Box width="329px" height="50px" paddingTop="15px">
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
            href="/register"
          >
            Create an account
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
