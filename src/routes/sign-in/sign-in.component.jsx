import { useEffect } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const SignIn = () => {
  return (
    <div>
      <h1>Sign in page</h1>
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default SignIn;
