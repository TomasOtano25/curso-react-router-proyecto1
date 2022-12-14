import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { BlogPage } from "./components/BlogPage";
import { BlogPost } from "./components/BlogPost";
import { HomePage } from "./components/HomePage";
import { Menu } from "./components/Menu";
import { ProfilePage } from "./components/ProfilePage";
import { LoginPage } from "./pages/LoginPage";
import { LogoutPage } from "./pages/LogoutPage";

import { AuthProvider, ProtectedPage } from "./components/auth/auth";
import { PostProvider } from "./components/posts";
import { CreatePost } from "./components/CreatePost";

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
          <PostProvider>
            <Menu />
            <Routes>
              {/* Parte dinamica */}
              <Route path="/" element={<HomePage />} />

              <Route path="/blog" element={<BlogPage />}>
                <Route path="create" element={<CreatePost />} />
                <Route path=":slug" element={<BlogPost />} />
              </Route>

              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/logout"
                element={
                  <ProtectedPage>
                    <LogoutPage />
                  </ProtectedPage>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedPage>
                    <ProfilePage />
                  </ProtectedPage>
                }
              />

              <Route path="*" element={<p>Not found</p>} />
            </Routes>
            <footer></footer>
          </PostProvider>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
