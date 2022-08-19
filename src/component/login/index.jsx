import React, { useState } from "react";
import Styles from "./styles.module.scss";
import { TRAVELOOK_LOGO, LOGIN_ICON, GOOGLE_ICON } from "../../assets";
import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router";

const LoginComponent = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    showPassword: false,
    isSignUp: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const switchMode = () => {
    setValues({
      ...values,
      isSignUp: !values.isSignUp,
      showPassword: false,
    });
  };

  const handleToHomepage = () => navigate('/')

  return (
    <div className={Styles.Container}>
      <div className={Styles.Wrapper}>
        <div className={Styles.Navigation} onClick={handleToHomepage}>
          <img src={TRAVELOOK_LOGO} alt="" />
        </div>
        <div className={Styles.Content}>
          <div className={Styles.BlurContainer}>
            <img src={LOGIN_ICON} alt="" loading="lazy" />
          </div>
          {/* <div className={Styles.FormControl}> */}
          <form className={Styles.FormControl}>
            <div className={Styles.TextForm}>
              { values.isSignUp ? <span>Sign up</span> : <span>Sign in</span>}
            </div>
            <div className={Styles.FormOuter}>
              {values.isSignUp ? (
                <div className={Styles.WrapperControlSignUp}>
                  <div className={Styles.FormControlSignUp}>
                    <span>First Name</span>
                    <OutlinedInput
                      placeholder="First Name"
                      type={values.firstName}
                      value={values.firstName}
                      onChange={handleChange("firstName")}
                      required
                      sx={{
                        height: 44,
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#000000",
                        background: "#FFFFFF",
                      }}
                      variant="outlined"
                    />
                  </div>
                  <div className={Styles.FormControlSignUp}>
                    <span>Last Name</span>
                    <OutlinedInput
                      placeholder="Last Name"
                      type={values.lastName}
                      value={values.lastName}
                      onChange={handleChange("lastName")}
                      required
                      sx={{
                        height: 44,
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#000000",
                        background: "#FFFFFF",
                      }}
                      variant="outlined"
                    />
                  </div>
                </div>
              ) : (
                <Button>
                  <img src={GOOGLE_ICON} alt="" />
                  <span>Google</span>
                </Button>
              )}
              { values.isSignUp ?  null : <label>or use your email to sign in :</label>}
            </div>
            <div className={Styles.WrapperControlLogin}>
              <div className={Styles.FormControlLogin}>
                <span>Email</span>
                <OutlinedInput
                  placeholder="@example.com"
                  type={values.email}
                  value={values.email}
                  onChange={handleChange("email")}
                  required
                  sx={{
                    height: 44,
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#000000",
                    background: "#FFFFFF",
                  }}
                  variant="outlined"
                />
              </div>
              <div className={Styles.FormControlLogin}>
                <span>Password</span>
                <OutlinedInput
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  placeholder="•••••••••"
                  sx={{
                    height: 44,
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#000000",
                    background: "#FFFFFF",
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              <div className={Styles.FormControlButton}>
                <Button
                  style={{
                    textTransform: "none",
                    backgroundColor: "#1E1E1E",
                    color: "white",
                    width: "100%",
                    height: 44,
                    borderRadius: 5,
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                  type="submit"
                >
                  {values.isSignUp ? "Sign Up" : "Sign In"}
                </Button>
              </div>
              <div className={Styles.Changer} onClick={switchMode}>
                {values.isSignUp ? (
                  <span>Already have an account ?</span>
                ) : (
                  <span>Dont have an account ? Sign up</span>
                )}
              </div>
              {/* <div className={Styles.Forgot}>
                <Button>Forgot password</Button>
              </div> */}
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
