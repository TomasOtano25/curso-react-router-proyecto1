import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/auth/auth";

function ProtectedPage({ children }) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
