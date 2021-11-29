import React, { useState } from "react";
import Button from "../common/Button/Button";
import {Textfield} from "../common/Textfield/Textfield"
import "../styles/login.css";
import background from "../../assets/icons/background.jpg"

interface Props {
  handleLoginButton: any;
  errorMessage: any;
  successMessage: any;
}

export const Login: React.FC<Props> = ({ handleLoginButton, errorMessage, successMessage }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // stores empty field error
  const [showEmptyFieldError, setShowEmptyFieldError] = useState(false);

  const clickLoginButton = async () => {
    if (!(email || password)) {
      setShowEmptyFieldError(true);
    } else {
      await handleLoginButton(email, password);
      console.log("from login",email, password)
    }
  };

  return (
    <div className="login-main-div">
       <img className ="background" src = {background} alt = "background"/>
      <div className="textfield-div-login">
        <p><b>Welcome back! Login!</b></p>
        <Textfield
          label="Email"
          placeholder="Enter email address"
          id="email"
          onChange={(e: any) => setEmail(e.target.value)}
          value={email}
        />

        <Textfield
          label="Password"
          type="password"
          placeholder="Enter password here"
          id="password"
          onChange={(e: any) => setPassword(e.target.value)}
          value={password}
        />
        {errorMessage ? (
          <p className="sign-in-error">{errorMessage}</p>
        ) : successMessage ? (
          <p className="sign-in-success">{successMessage}</p>
        ) : (
          showEmptyFieldError && (
            <p className="sign-in-error">Please fill all the fields</p>
          )
        )}
        <div className="login_button_div">
          <Button
            value="Login"
            id="login_button"
            handleClick={clickLoginButton}
          />
        </div>
      </div>
    </div>
  );
};
