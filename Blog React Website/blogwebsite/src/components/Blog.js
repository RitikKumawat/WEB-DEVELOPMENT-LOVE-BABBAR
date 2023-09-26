import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import BlogDetails from './BlogDetails';
import Spinner from './Spinner';
function Blog() {
  //Step 3 Consume
  const {posts,loading} = useContext(AppContext);
  console.log("printing inside blog")
  console.log(posts);
  return (
    <div className='blog-class w-11/12  max-w-[670px] py-8 flex flex-col gap-y-7 mt-[42px] mb-[70px] justify-center items-center mx-auto'>
      
      {
        loading ? 

        (<Spinner/>) : 
        (
          posts.length === 0 ? 
          (<div>
            <p>No Post Found</p>
          </div>) : 
          (posts.map((post)=>(
            <BlogDetails key={post.id} post = {post}/>
          )))
        )
      }
    </div>
  )
}

export default Blog