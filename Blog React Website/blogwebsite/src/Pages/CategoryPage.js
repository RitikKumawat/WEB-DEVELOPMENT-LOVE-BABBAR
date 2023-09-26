import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';

function CategoryPage() {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div className='mt-[100px] mb-6 max-w-2xl mx-auto flex items-center space-x-2'>
            <button className='rounded-md px-4 py-1 border-2'  onClick={()=> navigation(-1)}>
                Back
            </button>
            <h2>
                Blogs on <span>{category}</span>
            </h2>
        </div>
        <Blog/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage