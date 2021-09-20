import React, { useState, useContext, useEffect } from "react";
import Spinner from "../../components/Spinner";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db, auth } from "../../utils/firebase";

const initialValues = {
  user: { role: "public" },
};

const AuthContext = React.createContext(initialValues);

const users = {
  doctor: {
    name: "Dr.MCsqueezy",
    role: "doctor",
    email: "doc@gmail.com",
  },
  radiologist: {
    name: "Radiologist Scott",
    role: "radiologist",
    email: "radist@gmail.com",
  },
  radiographer: {
    name: "Radiographer Cole",
    role: "radiographer",
    email: "pher@gmail.com",
  },
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(users["radiographer"]);
  const [state, setState] = useState("loading");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchCurrentUser(user.email);
      } else {
        setUser({});
        setState("success");
      }
    });
    return () => unsubscribe();

    // eslint-disable-next-line
  }, []);

  const fetchCurrentUser = async (email) => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      let user;
      querySnapshot.forEach((doc) => {
        if (doc.data().email === email) {
          user = doc.data();
        }
      });

      if (user) {
        setUser(user);
        setState("success");
      } else {
        setUser({});
        return "User not found";
      }
    } catch (error) {
      console.log("error ", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
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
      <AuthContext.Provider value={{ user, logout, fetchCurrentUser }}>
        {children}
      </AuthContext.Provider>
    );
  }
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
