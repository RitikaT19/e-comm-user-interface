import React, { useContext } from "react";
import { SignUp } from "./SignUp";
import {LoadingContext} from "../../context/Loading"
import { SignUpContext } from "../../context/SignUp";
import { addUser, clearErrors } from "../../actions/signUp";
import {Header} from "../common/Header/Header"
import { LayoutHeader } from "../common/LayoutHeader/LayoutHeader";

export const SignUpUser: React.FC = () => {
  const { state: signUpState, dispatch: signUpDispatch } =
    useContext(SignUpContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);

  const clickSignUpButton = async (data: any) => {
    await addUser(data)(signUpDispatch, loadingDispatch).then(() => {
      console.log("add a new user", data);
    });
    // clearErrors(signUpDispatch)
  };
  return (
    <div>
      <LayoutHeader/>
      <SignUp
        handleSignUpButton={clickSignUpButton}
        errorMessage={signUpState.error}
        successMessage={signUpState.addUserSuccess}
      />
    </div>
  );
};

// import React, { useContext, useEffect } from "react";
// import { LayoutHeader } from "../common/LayoutHeader/LayoutHeader";
// import { LoadingContext } from "../../context/Loading";
// import { ProductContext } from "../../context/Product";
// import { getProductBySlug} from "../../actions/product";
// import Button from "../common/Button/Button";

// export const SignUpUser: React.FC = () => {
  

//   return (
//     <>
//       <LayoutHeader />
//       sign in
//       Product Page...............
//     </>
//   );
// };

