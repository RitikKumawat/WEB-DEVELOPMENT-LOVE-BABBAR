

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


function useGif(tag) {
    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(false);
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
    async function fetchData(tag){
      setLoading(true);
      
      const {data} = await axios.get(tag? tagMemeUrl : randomMemeUrl);
     
      const imageSource = data.data.images.downsized.url;
    //   console.log(imageSource);
      setGif(imageSource);
      setLoading(false);
    }
    useEffect(()=>{
      fetchData('car');
    },[])
   
    return{gif,loading,fetchData};
    
}

export default useGif