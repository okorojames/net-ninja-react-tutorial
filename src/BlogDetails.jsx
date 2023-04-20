import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    error,
    data: blog,
    isPending,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  //
  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
