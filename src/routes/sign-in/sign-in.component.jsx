import { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignupForm from "../../components/signup-form/signup-form.component";

const SignIn = () => {
  const [name, setName] = useState("");

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
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    setName(user.displayName);
    console.log(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      {name ? <h3>Hello {name}</h3> : ""}
      <button onClick={logGoogleUser}>Sign in with Google</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google</button> */}
      <SignupForm />
    </div>
  );
};

export default SignIn;
