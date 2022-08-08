import React from "react";
import Styles from "./styles.module.scss";
import { TRAVELOOK_LOGO } from "../../assets";
import { Button } from '@mui/material';

const LoginComponent = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.Wrapper}>
        <div className={Styles.Navigation}>
          <img src={TRAVELOOK_LOGO} alt="" />
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
