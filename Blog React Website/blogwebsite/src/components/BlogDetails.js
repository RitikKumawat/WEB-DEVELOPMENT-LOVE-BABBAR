import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogDetails({post}) {
  return (
    <div className=' mt-0 py-0'>
        <NavLink to={`/blog/${post.id}`}>
            <span className=' font-bold text-xl hover:underline'>
            {post.title}</span>
        </NavLink>
        <p>
            By <span className=' italic'> {post.author} </span>
            on {" "}
            <NavLink to={`/categories/${post.category.replace(" ","-")}`}>
                <span className='font-bold underline'>{post.category}</span>
            </NavLink>
        </p>
        <p className=''>Posted on {post.date}</p>
        <br></br>
        <p className='text-[16px]'>{post.content}</p>
        <br></br>
        <div>
            {post.tags.map( (tags, index) => (
                <NavLink key={index} to={`/tags/${tags.replace(" ","-")}`}>
                    <span className='underline text-blue-700 text-sm font-semibold'>{`#${tags} `}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default BlogDetails