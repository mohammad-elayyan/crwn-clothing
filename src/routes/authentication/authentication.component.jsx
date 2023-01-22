import { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signAuthUserInWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import SignupForm from "../../components/signup-form/signup-form.component";
import SigninForm from "../../components/signin-form/signin-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //       console.log(response);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };
  return (
    <div className="authentication-container">
      <SigninForm
        logGoogleUser={logGoogleUser}
        signAuthUserInWithEmailAndPassword={signAuthUserInWithEmailAndPassword}
      />

      <SignupForm />
    </div>
  );
};

export default Authentication;
