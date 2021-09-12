import React, { useState, useContext, useEffect } from "react";
import Spinner from "../../components/Spinner";

const initialValues = {
  user: { role: "public" },
};

const AuthContext = React.createContext(initialValues);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ role: "radiologist" });
  const [state, setState] = useState("loading");

  const fetchUser = () => {
    setTimeout(() => {
      setState("success");
    }, 2000);
  };
  console.log(state);

  useEffect(() => {
    fetchUser();
  }, []);

  const login = (data) => {
    console.log("inside auth do firebase", data);
    setUser({ role: data.email });
  };

  const logout = () => {
    setUser({ role: "public" });
  };

  if (state === "loading") {
    return (
      <div
        style={{
          width: "98vw",
          height: "98vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner />
      </div>
    );
  } else if (state === "success") {
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  }
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
