import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

import BlogDetails from '../components/BlogDetails';
import Pagination from '../components/Pagination';

function BlogPage() {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blog"
    const navigation = useNavigate();
    const location = useLocation();
    const[blog, setBlog] = useState(null);
    const[relatedBlogs, setRelatedBlogs] = useState([]);
    const{setLoading,loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}?blogId=${blogId}`;
        console.log("url is :")
        console.log(url);

        try{
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log("Error in fetching bold id ");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }
    useEffect( ()=> {
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])
  return (
    <div>
        <Header/>
        <div className='blog-page w-11/12  max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center mx-auto'>

        <div className='w-full  '>
            <button className='rounded-md px-4 py-1 border-2' onClick={()=> navigation(-1)}>
                Back
            </button>
        </div>
        {
            loading ?
            (<div> 
                <p>Loading</p>
            </div>): 
            blog ? 
            (<div>
                <BlogDetails post ={blog}/>
                <h2>Related Blogs</h2>
                {
                    relatedBlogs.map( (post) => (
                        <div key={post.id}>
                            <BlogDetails post ={post} />
                        </div>
                    ))
                }
            </div>) :
            (<div>
                <p>No blog Found</p>
            </div>)
        }
        </div>
        <Pagination/>
    </div>
  )
}

export default BlogPage