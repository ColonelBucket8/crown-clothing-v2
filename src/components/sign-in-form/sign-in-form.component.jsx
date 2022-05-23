import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div>
      <h1>Sign In Form</h1>
      <FormInput
        label="Email"
        type="text"
        required
        onChange={handleChange}
        name="email"
        value={email}
      />

      <FormInput
        label="Password"
        type="password"
        required
        onChange={handleChange}
        name="password"
        value={password}
      />

      <Button buttonType="google" type="submit" onClick={logGoogleUser}>
        Sign In With Google
      </Button>
      <Button type="submit">Sign In</Button>
    </div>
  );
};

export default SignInForm;
