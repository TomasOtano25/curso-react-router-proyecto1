import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "./auth/auth";
// import { blogdata } from "./blogdata";
import { usePosts } from "./posts";

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const { posts, deletePost } = usePosts();

  const blogpost = posts.find((post) => post.slug === slug);

  // const canDelete =
  //   auth.user?.isAdmin || blogpost.author === auth.user?.username;

  const returnToBlog = () => {
    navigate("/blog");
  };
  return (
    <>
      <h2>{blogpost?.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogpost?.content}</p>
      <p>@{blogpost?.author}</p>

      {/* {canDelete && (
        <>
          <button>Actualizar blogpost</button>
          <button>Eliminar blogpost</button>
        </>
      )} */}

      {auth.user?.update && <button>Actualizar blogpost</button>}
      {auth.user?.delete && (
        <button
          onClick={() => {
            console.log(blogpost.slug);
            deletePost(blogpost.slug);
          }}
        >
          Delete blogpost
        </button>
      )}
    </>
  );
}

export { BlogPost };
