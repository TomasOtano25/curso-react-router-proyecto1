import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu({ children }) {
  return (
    <nav>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              to={route.to}
              end
            >
              {route.text}
            </NavLink>
          </li>
        ))}

        {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li> */}

        {/* <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
            to="/profile"
          >
            Profile
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

const routes = [];
routes.push({
  to: "/",
  text: "Home",
});
routes.push({
  to: "/blog",
  text: "Blog",
});
routes.push({
  to: "/profile",
  text: "Profile",
});
routes.push({
  to: "/login",
  text: "Login",
});
routes.push({
  to: "/logout",
  text: "Logout",
});

export { Menu };
