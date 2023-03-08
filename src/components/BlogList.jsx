import React from 'react'

const BlogList = ({blogs, title}) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <span>Written by {blog.author}</span>
        </div>
      ))}
    </div>
  )
}

export default BlogList