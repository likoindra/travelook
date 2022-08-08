import React from "react";
import LoginComponent from "../../component/login";
import Styles from "./styles.module.scss";
export default function Authentication() {
  return (
    <div className={Styles.Container}>
      <LoginComponent />
    </div>
  );
}
