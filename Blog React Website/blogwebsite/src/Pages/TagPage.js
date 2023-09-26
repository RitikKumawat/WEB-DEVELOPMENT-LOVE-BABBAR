import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';

function TagPage() {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div className='w-11/12  max-w-[670px] py-3 flex   mt-[86px] mb-0 justify-start items-center mx-auto'>
            <button className='rounded-md px-4 py-1 border-2' onClick={()=> navigation(-1)}>
                Back
            </button>
            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blog/>
        <Pagination/>
    </div>
  )
}

export default TagPage