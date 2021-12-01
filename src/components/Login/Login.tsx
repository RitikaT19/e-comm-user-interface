import React, { useState } from "react";
import Button from "../common/Button/Button";
import { Textfield } from "../common/Textfield/Textfield";
import "../styles/login.css";
import background from "../../assets/icons/background.jpg";

interface Props {
  handleLoginButton: any;
  errorMessage: any;
  successMessage: any;
}

export const Login: React.FC<Props> = ({
  handleLoginButton,
  errorMessage,
  successMessage,
}) => {
  // stores email
  const [email, setEmail] = useState<string>("");
  // stores password
  const [password, setPassword] = useState<string>("");
  // stores empty field error
  const [showEmptyFieldError, setShowEmptyFieldError] = useState(false);

  // function for when login button is clicked
  const clickLoginButton = async () => {
    // if email or password is not provided, throw error
    if (!(email || password)) {
      setShowEmptyFieldError(true);
    } else {
      await handleLoginButton(email, password);
    }
  };

  return (
    <div className="login-main-div">
      <img className="background" src={background} alt="background" />
      <div className="textfield-div-login">
        {/* Login heading */}
        <p>
          <b>Welcome back! Login!</b>
        </p>
        {/* Textfield for email */}
        <Textfield
          label="Email"
          placeholder="Enter email address"
          id="email"
          onChange={(e: any) => setEmail(e.target.value)}
          value={email}
        />

        {/* Textfield for password */}
        <Textfield
          label="Password"
          type="password"
          placeholder="Enter password here"
          id="password"
          onChange={(e: any) => setPassword(e.target.value)}
          value={password}
        />
        {/* error and success messages */}
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
          {/* Button for login */}
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
