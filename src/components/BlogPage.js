import React from "react";
import { Link, Outlet } from "react-router-dom";

import { usePosts } from "./posts";

function BlogPage() {
  const { posts } = usePosts();

  return (
    <>
      <h1>Blob</h1>
      <Outlet />

      <ul>
        {posts.map((post, index) => (
          <BlogLink key={index} post={post} />
        ))}
      </ul>
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export { BlogPage };
