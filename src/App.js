import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { BlogPage } from "./components/BlogPage";
import { HomePage } from "./components/HomePage";
import { Menu } from "./components/Menu";
import { ProfilePage } from "./components/ProfilePage";

// /#/ -> Home
// /#/blog
// /#/profile
// /#/lalala -> Not Found
// /blog, /lalala -> Home

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          {/* Parte dinamica */}
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>

        <footer></footer>
      </HashRouter>
    </>
  );
}

export default App;
