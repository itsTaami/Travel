import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthPage = () => {
  const [isSignIn, setisSignIn] = useState(true);
  return (
    <div>
      {isSignIn ? (
        <SignIn setisSignIn={setisSignIn} />
      ) : (
        <SignUp setisSignIn={setisSignIn} />
      )}
    </div>
  );
};

export default AuthPage;
