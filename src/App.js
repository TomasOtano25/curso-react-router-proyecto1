import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { BlogPage } from "./components/BlogPage";
import { BlogPost } from "./components/BlogPost";
import { HomePage } from "./components/HomePage";
import { Menu } from "./components/Menu";
import { ProfilePage } from "./components/ProfilePage";
import { LoginPage } from "./pages/LoginPage";
import { LogoutPage } from "./pages/LogoutPage";

import { AuthProvider } from "./components/auth/auth";

// /#/ -> Home
// /#/blog
// /#/profile
// /#/lalala -> Not Found
// /blog, /lalala -> Home

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            {/* Parte dinamica */}
            <Route path="/" element={<HomePage />} />

            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            <Route path="*" element={<p>Not found</p>} />
          </Routes>
          <footer></footer>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
