import * as React from "react";
import { Container } from "./styles";
// import Button from "@material-ui/core/Button";
import { Button } from "../Button";
import { StyledInput } from "../Form/Input";
import Logo from "../Logo";

const LoginForm = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitForm = () => {
    // console.log("emai", email, password);
    // if(!email) setEmailError(true)
    // if(!password) setPasswordError(true)
    props.onSubmit({ email, password });
  };

  return (
    <Container>
      <div className="form">
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submitting ");
          }}
        >
          <div className="logo">
            <Logo />
          </div>
          <p className="subtitle">Login to your account</p>
          {props.errorMessage && (
            <p className="text-red-700	mb-4 text-sm	">{props.errorMessage}</p>
          )}
          <StyledInput
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="input"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <StyledInput
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            className="input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button
            loading={props.state === "loading"}
            onClick={submitForm}
            variant="contained"
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;
