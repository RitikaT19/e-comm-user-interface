import React, { useState } from "react";
import Button from "../common/Button/Button";
import {Textfield} from "../common/Textfield/Textfield"
import "../styles/sign-up.css";
import background from "../../assets/icons/background.jpg"

// defines all the required props by the component
interface Props {
  handleSignUpButton: any;
  errorMessage: any,
  successMessage: any,
}
export const SignUp: React.FC<Props> = ({ handleSignUpButton, errorMessage,
  successMessage }) => {
  // stores email
  const [email, setEmail] = useState<string>("");
  // stores password
  const [password, setPassword] = useState<string>("");
  // stores firstname
  const [firstName, setFirstName] = useState<string>("");
  // stores last name
  const [lastName, setLastName] = useState<string>("");
  // stores empty field error
  const [showEmptyFieldError, setShowEmptyFieldError] = useState(false);

  // function for when clickSignUpButton is clicked
  const clickSignUpButton = async () => {
    // if any of the parameter is missing, throw error
    if (!(firstName || lastName || email || password)) {
      setShowEmptyFieldError(true);
    } else {
      // call handleSignUpButton wth data
      await handleSignUpButton({ firstName, lastName, email, password });
    }
  };
  return (
    <div className="sign-up-main-div">
      <img className ="background" src = {background} alt = "background"/>
      <div className="textfield-div-sign-up">
        {/* heading for sign up */}
      <p><b>Create a new account!</b></p>
      {/* textfield for firstname */}
        <Textfield
          label="First name"
          placeholder="Enter first name"
          id="first_name"
          onChange={(e: any) => setFirstName(e.target.value)}
          value={firstName}
        />
        {/* input for last name */}
        <Textfield
          label="Last name"
          placeholder="Enter last name"
          id="last_name"
          onChange={(e: any) => setLastName(e.target.value)}
          value={lastName}
        />
        {/* input for email */}
        <Textfield
          label="Email"
          placeholder="Enter email address"
          id="email"
          onChange={(e: any) => setEmail(e.target.value)}
          value={email}
        />
        {/* input for password */}
        <Textfield
          label="Password"
          type="password"
          placeholder="Enter password here"
          id="password"
          onChange={(e: any) => setPassword(e.target.value)}
          value={password}
        />
        {/* if there is error, print the error message  */}
        {errorMessage ? (
          <p className="sign-in-error">{errorMessage}</p>
        ) : successMessage ? (
          <p className="sign-in-success">{successMessage}</p>
        ) : (
          showEmptyFieldError && (
            <p className="sign-in-error">Please fill all the fields</p>
          )
        )}
        <div className="sign_up_button_div">
          {/* Button for submitting the sign up form */}
          <Button
            value="Sign up"
            id="sign_up_button"
            handleClick={clickSignUpButton}
          />
        </div>
      </div>
    </div>
  );
};
