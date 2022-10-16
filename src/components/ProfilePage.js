import React from "react";
import { useAuth } from "./auth/auth";

function ProfilePage() {
  const auth = useAuth();

  return (
    <>
      <h1>Perfile</h1>
      <p>Welcome, {auth.user?.username}</p>
    </>
  );
}

export { ProfilePage };
