import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
const Home = () => {
  // using overall useFetch to always fetc data anytime with any endpoint, so damn cool
  const {
    isPending,
    error,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  // rendering template
  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
