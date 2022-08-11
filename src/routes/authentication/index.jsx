import React from "react";
import LoginComponent from "../../component/login";
import Styles from "./styles.module.scss";

export default function Authentication() {
  return (
    <div className={Styles.Container}>
      <div className={Styles.Content}>
        <div className={Styles.CircleOne}></div>
        <div className={Styles.CircleTwo}></div>
      </div>
      <div className={Styles.Component}>
        <LoginComponent />
      </div>
    </div>
  );
}
