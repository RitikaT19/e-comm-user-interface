import React, { useContext } from "react";
import { SignUp } from "./SignUp";
import { LoadingContext } from "../../context/Loading";
import { SignUpContext } from "../../context/SignUp";
import { addUser, clearErrors } from "../../actions/signUp";
import { LayoutHeader } from "../common/LayoutHeader/LayoutHeader";
import { History } from "history";

interface Props {
  history?: History;
}
export const SignUpUser: React.FC<Props> = (props) => {
  // sign up context
  // renamed state and dispatch property as signUpState and signUpDispatch respectively
  const { state: signUpState, dispatch: signUpDispatch } =
    useContext(SignUpContext);
  // loading context
  const { dispatch: loadingDispatch } = useContext(LoadingContext);

  // function for signing up an user
  const clickSignUpButton = async (data: any) => {
    // call addUser action
    await addUser(data, props?.history)(signUpDispatch, loadingDispatch);
  };
  return (
    <div>
      <LayoutHeader />
      <SignUp
        handleSignUpButton={clickSignUpButton}
        errorMessage={signUpState.error}
        successMessage={signUpState.addUserSuccess}
      />
    </div>
  );
};
