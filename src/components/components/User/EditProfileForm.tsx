import {
  Box,
  Button,
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
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useParams } from "react-router-dom";
import { ButtonSave } from "../ButtonBack/ButtonSave";
import { changePasswordThunk, meThunk } from "../../redux/slices/authSlice";
import { useEffect, useRef, useState } from "react";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import logo from "../../../img/defaultProfileImage.jpg";

export const EditProfileForm = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [profileChanged, setProfileChanged] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const [file, setFile] = useState<File | null>(null); // State for the selected file
  const fileInputRef = useRef<HTMLInputElement>(null); // Ref for the file input element

  const user = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(meThunk());
  }, [dispatch]);

  const formikProfile = useFormik({
    initialValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      team: user.team,
      avatar_url: user.avatar_url ? user.avatar_url : logo,
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
    enableReinitialize: true,
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
    setProfileChanged(
      hasChanges(formikProfile.values, formikProfile.initialValues)
    );
  }, [formikProfile.values, formikProfile.initialValues]);

  useEffect(() => {
    setPasswordChanged(
      hasChanges(formikPassword.values, formikPassword.initialValues)
    );
  }, [formikPassword.values, formikPassword.initialValues]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (profileChanged) {
      formikProfile.submitForm();
    }

    if (passwordChanged) {
      formikPassword.submitForm();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    // Here, you could upload the file or update the avatar preview
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Update the avatar URL or handle the file as needed
        formikProfile.setFieldValue("avatar_url", reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 393,
        top: 112,
      }}
    >
      <Typography
        sx={{
          width: 130,
          display: "flex",
          flexDirection: "column",
          left: 16,
        }}
        fontStyle="Roboto"
        fontWeight="700"
        fontSize="24px"
        lineHeight="33.6px"
      >
        Edit Profile
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 393,
          top: 156,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: 265,
            width: 154,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={formikProfile.values.avatar_url || user.avatar_url}
            sx={{
              width: 154,
              height: 229,
            }}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <Button
            variant="contained"
            sx={{
              size: "small",
              borderRadius: "100px",
              display: "flex",
              flexDirection: "row",
              gap: "3px",
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            <VideoCameraBackOutlinedIcon
              sx={{
                width: 16,
                height: 16,
              }}
            />
            <Typography
              fontStyle="Roboto"
              fontSize="12px"
              fontWeight="700"
              textTransform="none"
            >
              Edit Picture
            </Typography>
          </Button>
        </Box>
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
                formikProfile.touched.email &&
                Boolean(formikProfile.errors.email)
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
    </Box>
  );
};
