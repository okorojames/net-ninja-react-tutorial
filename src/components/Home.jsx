import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  //
  useEffect(() => {
    setTimeout(() => {
      // start fetch code
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("response is not okay");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError();
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
      // end fetch code
    }, 1000);
  }, []);
  //
  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
