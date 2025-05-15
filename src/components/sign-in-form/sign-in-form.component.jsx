import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles.jsx";
import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.comonent";
import { useDispatch } from "react-redux";
import { signInStart } from "../../store/user/user.action.js";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormField] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFormField = () => {
    setFormField(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(signInStart(email, password));

      resetFormField();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Wrong password!");
          break;
        case "auth/user-not-found":
          alert("no user assosiated with this email");
          break;
        case "auth/invalid-login-credentials":
          alert("no user assosiated with this email");
          break;
        default:
          console.log(err);
      }
    }
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"email"}
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label={"password"}
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
