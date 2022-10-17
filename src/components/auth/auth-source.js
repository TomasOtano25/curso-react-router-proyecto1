import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = ({ username }) => {
    setUser({ username });
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

function ProtectedPage({ children }) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
}
