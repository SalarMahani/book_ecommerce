import React from "react";
import "./CSS/LoginSignUp.css";
import loginSignupData from "../Components/Assets/loginSignupData";

const mergedData = loginSignupData.reduce((acc, item) => {
  return { ...acc, ...item };
}, {});
const {
  loginTitle,
  signUpTitle,
  username,
  email,
  password,
  agreement,
  haveAccount,
  notHaveAccount,
  signup,
  enter,
} = mergedData;
function LoginSignUp(props) {
  return (
    <div className="loginSignup">
      <div className={"loginSignupContainer"}>
        <h1>{signUpTitle}</h1>
        <div className="loginSignupFields">
          <input type={"text"} placeholder={username} />
          <input type={"email"} placeholder={email} />
          <input type={"password"} placeholder={password} />
        </div>
        <div className="loginSignupAgree">
          <p>{agreement}</p>
          <input type={"checkbox"} name={""} id={""} />
        </div>
        <button>{signup}</button>
        <p className="loginSignupLogin">
          {haveAccount} <span>{enter}</span>
        </p>
      </div>
    </div>
  );
}

export default LoginSignUp;
