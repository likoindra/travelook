import React from "react";
import Hero from "../../component/hero";
import Styles from "./styles.modules.scss";

export default function HomePage() {
  return (
    <div className={Styles.Container}>
      <div className={Styles.BoxWidth}>
        <Hero />
      </div>
    </div>
  );
}
