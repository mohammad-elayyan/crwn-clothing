import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./signin-form.styles.scss";

const SigninForm = ({ logGoogleUser, signAuthUserInWithEmailAndPassword }) => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState("");

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signAuthUserInWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          setErrorMessage("Password is not correct");
          break;
        case "auth/user-not-found":
          setErrorMessage("User is not exist");
          break;
        default:
          console.log(error);
      }
      console.log(error);
    }
  };
  const handleInput = (e) => {
    const { value, name } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign up with your email & password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleInput}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleInput}
        />
        <h4>{errorMessage}</h4>
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
