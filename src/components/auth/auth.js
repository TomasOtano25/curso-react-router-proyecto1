import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// const adminList = ["Tomas", "Superadmin", "freddier"];

const roles = [
  { role: "admin", update: true, delete: true },
  { role: "creator", update: true, delete: true },
  { role: "editor", update: true, delete: false },
];

const AuthContext = React.createContext();

function checkRoles(role) {
  return roles.find((item) => item.role === role);
}

function addPermissions(user) {
  if (!checkRoles(user.role)) return { ...user, update: false, delete: false };
  const role = roles.filter((item) => item.role === user.role);

  const newUser = { ...user, ...role[0] };
  return newUser;
}

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = ({ username }) => {
    // const isAdmin = adminList.find((admin) => admin === username);

    let user = {
      username,
      isAdmin: false,
      role: "admin",
    };

    user = addPermissions(user);

    setUser(user);
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

export function ProtectedPage({ children }) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export { AuthProvider, useAuth };
