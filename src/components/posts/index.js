import { createContext, useContext, useState } from "react";
import { blogdata } from "../blogdata";

const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(blogdata);

  const createPost = (data) => {
    const temp = [...posts];

    temp.push(data);

    setPosts(temp);
  };

  const deletePost = (slug) => {
    setPosts(posts.filter((item) => item.slug !== slug));
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        createPost,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const posts = useContext(PostContext);
  return posts;
}

export { PostProvider, usePosts };
