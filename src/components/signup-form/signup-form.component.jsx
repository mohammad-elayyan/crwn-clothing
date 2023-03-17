import React, { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignupContainer, H2 } from "./signup-form.styles";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignupForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [passwordRule, setPasswordRule] = useState("");

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (password !== confirmPassword) {
      setPasswordRule("Passwords do not match");
      return;
    } else if (password.length < 6) {
      setPasswordRule("Password is less than 6 characters");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setPasswordRule("Email is already exist");
      } else {
        console.log(error);
      }
    }
  };
  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignupContainer>
      <H2>Don't have an account </H2>
      <span>Sign up with your email & password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label="Name"
          type="text"
          name="displayName"
          required
          value={displayName}
          onChange={handleInput}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={handleInput}
        />
        {passwordRule ? <h4>{passwordRule}</h4> : ""}
        <Button type="submit">Sign Up</Button>
      </form>
    </SignupContainer>
  );
};

export default SignupForm;
