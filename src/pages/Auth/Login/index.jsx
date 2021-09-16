import LoginForm from "../../../components/LoginForm/index";
import { Container } from "./styles";
import { useAuth } from "../../../context/AuthProvider";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { useState } from "react";

const Login = () => {
  const authContext = useAuth();
  const [state, setState] = useState("");
  const [errorMessage, setError] = useState("");

  const login = async ({ email, password }) => {
    setState("loading");
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        const response = await authContext.fetchCurrentUser(res.user.email);
        if (response === "User not found") {
          setError("Incorrect Email or password.");
          setState("error");
          return;
        }
        setState("success");
      }
    } catch (error) {
      setState("error");
      console.log("error ", error.message);
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        setError("Invalid email");
      } else if (error.message === "Firebase: Error (auth/user-not-found).") {
        setError("Incorrect Email or password.");
      } else {
        setError("Incorrect Email or password.");
      }
    }
  };

  return (
    <Container>
      <div className="bar" />
      <div className="inner">
        <LoginForm onSubmit={login} state={state} errorMessage={errorMessage} />
      </div>
    </Container>
  );
};

export default Login;
