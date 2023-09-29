
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  
  async function fetchProductData(){
    setLoading(true);
    try{
      const result = await fetch(API_URL);
      const data = await result.json();
      setPosts(data);
    }
    catch(error){
      alert("Can't fetch data");
      console.log("Error fetching data");
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[]);

  return (
    <div>
      {
        loading ? <FaSpinner className="mx-auto flex justify-center items-center h-[100vh] text-4xl "/> :
        posts.length>0  ? (
          <div className=" grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 space-y-10 min-h-[80vh]">
            {

            
            posts.map( (post)=>(
              <Product key={post.id} post={post}/>
            ))
            }
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <p>No data found</p>
          </div>)
      }
    </div>
  );
};

export default Home;
