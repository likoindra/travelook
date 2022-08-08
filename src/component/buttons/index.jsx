import React from "react";
import Styles from "./styles.module.scss";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  bookNow: "bookNow",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: Styles.BaseButton,
    [BUTTON_TYPE_CLASSES.bookNow]: Styles.BookNowButton,
  }[buttonType]);

const ButtonComponent = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default ButtonComponent;
