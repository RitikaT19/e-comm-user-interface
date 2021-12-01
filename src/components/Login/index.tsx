import React, { useContext } from "react";
import { Login } from "../Login/Login";
import { LoginContext } from "../../context/Login";
import { LoadingContext } from "../../context/Loading";
import { signIn } from "../../actions/login";
import { History } from "history";
import { LayoutHeader } from "../common/LayoutHeader/LayoutHeader";

interface Props {
  history?: History;
}
export const LoginUser: React.FC<Props> = (props) => {
  // login context
  // renamed state and dispatch property as loginState and loginDispatch respectively
  const { state: loginState, dispatch: loginDispatch } =
    useContext(LoginContext);
  // loading context
  const { dispatch: loadingDispatch } = useContext(LoadingContext);

  // function for user log in
  const clickLoginButton = async (email: string, password: string) => {
    await signIn(
      email,
      password,
      props?.history
    )(loginDispatch, loadingDispatch).then(() => {
      // storing user email and password in local storage
      localStorage.setItem("login", JSON.stringify({ email, password }));
    });
  };
  return (
    <div>
      <LayoutHeader />
      <Login
        handleLoginButton={clickLoginButton}
        // getting error message
        errorMessage={loginState.error}
        // getting success message
        successMessage={loginState.loginSuccess}
      />
    </div>
  );
};
