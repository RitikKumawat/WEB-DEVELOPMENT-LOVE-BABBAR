import './App.css';
import Pagination from './components/Pagination';
import Blog from './components/Blog';
import Header from './components/Header';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect( ()=> {
    fetchBlogPosts();
  },[]); 

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header/>
      <Blog/>
      <Pagination/>
    </div>
  );
}

export default App;
