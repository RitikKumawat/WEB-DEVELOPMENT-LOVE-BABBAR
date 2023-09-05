
import React, { useEffect, useState } from "react";
import {apiUrl, filterData} from "./data";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = ()=> {
  // using useEffect for api call
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  
    async function fetchData(){
      setLoading(true);
      try {
        let res = await fetch(apiUrl);
        let output = await res.json();
        //save data into variable
        setCourses(output.data);
        // console.log(data);

      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    }

  useEffect( ()=>{
    fetchData();
  },[]);  
  
  
  
  return (
    <div className=" min-h-screen flex flex-col bg-blue-950">
      <div>
        <Navbar/>
      </div>
      <div className=" bg-blue-950">
        <div>
          <Filter filterData  ={filterData}
          category={category}
          setCategory={setCategory} />
        </div>
        <div className=" w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ?(<Spinner/>) : <Cards courses={courses} category={category} />
          }
        </div>
      </div>
    
    </div>
  );
};

  

export default App;
