import React from "react";
import { useAuth } from "../components/auth/auth";

export function LogoutPage() {
  const auth = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    auth.logout();
  };
  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={handleLogin}>
        <label>Seguro que quieres salir?</label>

        <button type="submit">Salir</button>
      </form>
    </>
  );
}
