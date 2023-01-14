import "./button.styles.scss";

const Button = ({ children, buttonType, ...otherProps }) => {
  const button_type_classes = {
    google: "google-sign-in",
    invert: "inverted",
  };
  return (
    <button
      className={`button-container ${button_type_classes[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
