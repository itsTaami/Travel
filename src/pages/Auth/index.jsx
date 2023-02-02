import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Login = ({ handleClose, setUser }) => {
  const [isSignIn, setSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <SignIn
          setUser={setUser}
          setSignIn={setSignIn}
          handleClose={handleClose}
        />
      ) : (
        <SignUp setSignIn={setSignIn} />
      )}
    </>
  );
};

export default Login;
