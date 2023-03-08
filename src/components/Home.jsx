import React from 'react'
import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
  {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
  {title: 'Welcome to party', body: 'lorem ipsum...', author: 'yoshi', id: 2},
  {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
  ])
  //
  const [name, setName] = useState("mario")
  // 
  const handleDel = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }
  // 
  useEffect(() => {
    console.log('useeffect ran')
    console.log(name)
  }, [name])
  // 
  return (
    <div className='Home'>
      <BlogList blogs={blogs} title='All Blogs' handleDel={handleDel} />
      <button onClick={() => setName("Luigi")}>change name</button>
      <p>{name}</p>
    </div>
  )
}

export default Home