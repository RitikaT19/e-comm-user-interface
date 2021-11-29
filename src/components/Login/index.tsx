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
  const { state: loginState, dispatch: loginDispatch } =
    useContext(LoginContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);

  const clickLoginButton = async (email: string, password: string) => {
    await signIn(
      email,
      password,
      props?.history
    )(loginDispatch, loadingDispatch).then(() => {
      localStorage.setItem("login", JSON.stringify({ email, password }));
      console.log("details", email, password);
    });
  };
  return (
    <div>
      <LayoutHeader/>
      <Login
        handleLoginButton={clickLoginButton}
        errorMessage={loginState.error}
        successMessage={loginState.loginSuccess}
      />
    </div>
  );
};
