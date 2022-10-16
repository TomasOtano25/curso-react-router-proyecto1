import React, { useState } from "react";
import { useAuth } from "../components/auth/auth";

export function LoginPage() {
  const auth = useAuth();

  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <label>Escribe tu nombre de usuarios </label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
