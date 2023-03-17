import { BaseBtn, GoogleSignInBtn, InvertedBtn } from "./button.styles";

export const button_type_classes = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};
const getBtn = (buttonType = button_type_classes.base) =>
  ({
    [button_type_classes.base]: BaseBtn,
    [button_type_classes.google]: GoogleSignInBtn,
    [button_type_classes.inverted]: InvertedBtn,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomBtn = getBtn(buttonType);
  return <CustomBtn {...otherProps}>{children}</CustomBtn>;
};

export default Button;
