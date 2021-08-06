import React, { useState, useContext, useEffect } from "react";

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
    setUser({ role: "radiologist" });
  };

  if (state === "loading") {
    return <h2>Loading....</h2>;
  } else if (state === "success") {
    return (
      <AuthContext.Provider value={{ user, login }}>
        {children}
      </AuthContext.Provider>
    );
  }
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
