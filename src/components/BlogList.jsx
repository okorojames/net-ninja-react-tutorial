import React from 'react'

const BlogList = ({blogs, title, handleDel}) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={()=> handleDel(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  )
}

export default BlogList