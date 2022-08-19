import { Button } from "@mui/material";
import React from "react";
import { TRAVELOOK_LOGO_MINI } from "../../assets";
import Styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  // const [toggle, setToggle] = useState(false);
  const handleSignIn = () => navigate("/auth");

  return (
    <section id="hero" className={Styles.Container}>
      <div className={Styles.Banner}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={Styles.ShapeFill}
          ></path>
        </svg>
      </div>
      <div className={Styles.Content}>
        <div className={Styles.Navigation}>
          <div className={Styles.WrapperImage}>
            <img src={TRAVELOOK_LOGO_MINI} alt="travelook" />
            {/* <div className={Styles.ToggleMenu}>
              <img
                src={toggle ? ICON_CLOSE : ICON_MENU}
                alt="menu"
                onClick={() => setToggle((prev) => !prev)}
              />
            </div> */}
            {/* <div className={Styles.NavigationMenu}>
              <ul>
                <li>
                  <a href="/hero">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/auth">Login</a>
                </li>
              </ul>
            </div> */}
          </div>
          <div className={Styles.SignIn} onClick={handleSignIn}>
            <Button>Sign in</Button>
          </div>
        </div>
        <div className={Styles.Main}>
          <span>Where’s next?</span>
          <p>Connecting you to new experience</p>
          <div className={Styles.FilterSearch}>
            Component
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
