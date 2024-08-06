import {
  Box,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";
import {
  validationSchemaChangePassword,
  validationSchemaEditProfile,
} from "./utils";
import { putUserThunk } from "../../redux/slices/userSlice";
import { useAppDispatch } from "../../redux/store";
import { useParams } from "react-router-dom";
import { ButtonSave } from "../ButtonBack/ButtonSave";
import { changePasswordThunk } from "../../redux/slices/authSlice";
import { useEffect, useState } from "react";
export const EditProfileForm = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [profileChanged, setProfileChanged] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const formikProfile = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "a.jovanovski02@gmail.com",
      team: "",
      avatar_url:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw0242K-PsgDhaGWptrkV9Sl&ust=1723030921231000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjHuMGk4IcDFQAAAAAdAAAAABAE",
    },
    onSubmit: (values) => {
      console.log("here", id);
      dispatch(putUserThunk({ id, ...values }));
    },
    validationSchema: validationSchemaEditProfile,
  });
  const formikPassword = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      dispatch(changePasswordThunk(values));
    },
    validationSchema: validationSchemaChangePassword,
  });
  const hasChanges = (
    values: Record<string, any>,
    initialValues: Record<string, any>
  ) => {
    return Object.keys(values).some(
      (key) => values[key] !== initialValues[key]
    );
  };
  useEffect(() => {
    // Check if there are changes in profile fields
    setProfileChanged(
      hasChanges(formikProfile.values, formikProfile.initialValues)
    );
  }, [formikProfile.values, formikProfile.initialValues]);

  useEffect(() => {
    // Check if there are changes in password fields
    setPasswordChanged(
      hasChanges(formikPassword.values, formikPassword.initialValues)
    );
  }, [formikPassword.values, formikPassword.initialValues]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    // Submit profile form if there are changes
    if (profileChanged) {
      formikProfile.submitForm();
    }

    // Submit password form if there are changes
    if (passwordChanged) {
      formikPassword.submitForm();
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 393,
        top: 156,
      }}
    >
      <Typography
        sx={{
          width: 130,
          height: 34,
          top: 112,
          left: 16,
          display: "flex",
          flexDirection: "column",
          position: "absolute",
        }}
        fontStyle="Roboto"
        fontWeight="700"
        fontSize="24px"
        lineHeight="33.6px"
      >
        Edit Profile
      </Typography>
      <Box
        component="img"
        sx={{
          width: 154,
          height: 229,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 361,

          left: 16,
          gap: "20px",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSave}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "361px",
            gap: "8px",
          }}
        >
          <ButtonSave onClick={handleSave} />
          <Typography
            fontStyle="Roboto"
            fontWeight="700"
            fontSize="18px"
            lineHeight="25.2px"
            textAlign="left"
          >
            Edit info
          </Typography>
          <TextField
            id="first_name"
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
            placeholder="First Name"
            variant="outlined"
            InputProps={{
              style: {
                borderRadius: "10px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlinedIcon
                    sx={{ width: "20px", height: "20px" }}
                  />
                </InputAdornment>
              ),
            }}
            onChange={formikProfile.handleChange}
            onBlur={formikProfile.handleBlur}
            value={formikProfile.values.first_name}
            error={
              formikProfile.touched.first_name &&
              Boolean(formikProfile.errors.first_name)
            }
          />
          <TextField
            id="last_name"
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
            placeholder="Last Name"
            variant="outlined"
            InputProps={{
              style: {
                borderRadius: "10px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlinedIcon
                    sx={{ width: "20px", height: "20px" }}
                  />
                </InputAdornment>
              ),
            }}
            onChange={formikProfile.handleChange}
            onBlur={formikProfile.handleBlur}
            value={formikProfile.values.last_name}
            error={
              formikProfile.touched.last_name &&
              Boolean(formikProfile.errors.last_name)
            }
          />
          <TextField
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
            id="email"
            type="email"
            disabled
            placeholder="Your Email"
            variant="outlined"
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
            onChange={formikProfile.handleChange}
            onBlur={formikProfile.handleBlur}
            value={formikProfile.values.email}
            error={
              formikProfile.touched.email && Boolean(formikProfile.errors.email)
            }
          />
          <FormControl
            fullWidth
            error={
              formikProfile.touched.team && Boolean(formikProfile.errors.team)
            }
          >
            <Select
              id="team"
              name="team"
              value={formikProfile.values.team}
              onChange={formikProfile.handleChange}
              onBlur={formikProfile.handleBlur}
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
                value="DESIGN"
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
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 361,

            gap: "8px",
          }}
        >
          <Typography>Change password</Typography>
          <TextField
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
            id="currentPassword"
            placeholder="Old Password"
            variant="outlined"
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
            onChange={formikPassword.handleChange}
            onBlur={formikPassword.handleBlur}
            value={formikPassword.values.currentPassword}
            error={
              formikPassword.touched.currentPassword &&
              Boolean(formikPassword.errors.currentPassword)
            }
          />
          <TextField
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
            id="password"
            placeholder=" New Password"
            variant="outlined"
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
            onChange={formikPassword.handleChange}
            onBlur={formikPassword.handleBlur}
            value={formikPassword.values.password}
            error={
              formikPassword.touched.password &&
              Boolean(formikPassword.errors.password)
            }
          />
          <TextField
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
            id="confirmPassword"
            placeholder="New Password"
            variant="outlined"
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
            onChange={formikPassword.handleChange}
            onBlur={formikPassword.handleBlur}
            value={formikPassword.values.confirmPassword}
            error={
              formikPassword.touched.confirmPassword &&
              Boolean(formikPassword.errors.confirmPassword)
            }
          />
        </Box>
      </Box>
    </Box>
  );
};
