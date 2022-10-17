import React, { useState } from "react";
import { useAuth } from "./auth/auth";
import { usePosts } from "./posts";

export const CreatePost = () => {
  const { user } = useAuth();

  const { createPost } = usePosts();

  const [post, setPost] = useState({
    title: "",
    slug: "",
    content: "",
    author: user?.username,
  });

  const handleForm = (e) => {
    e.preventDefault();

    createPost(post);
  };

  return (
    <div>
      <h2>Create Post</h2>

      <form onSubmit={handleForm}>
        <input
          value={post.title}
          type="text"
          placeholder="title"
          onChange={(e) => {
            setPost({
              ...post,
              title: e.target.value,
              slug: e.target.value.toLowerCase().split(" ").join("-"),
            });
          }}
        />

        <textarea
          value={post.content}
          type="text"
          placeholder="content"
          onChange={(e) => {
            setPost({
              ...post,
              content: e.target.value,
            });
          }}
        ></textarea>

        <button>Save</button>
      </form>
    </div>
  );
};
