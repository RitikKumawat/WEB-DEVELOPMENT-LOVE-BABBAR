import React from 'react'
import Header from '../components/Header'
import Blog from '../components/Blog'
import Pagination from '../components/Pagination'

function Home() {
  return (
    <div>
        <Header/>
        <div>
            <Blog/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home