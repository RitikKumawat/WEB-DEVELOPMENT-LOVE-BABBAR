import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

//Step 1 create context
export const AppContext = createContext();

//Step 2 Provide
export function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);
    const navigate = useNavigate();

    const fetchBlogPosts = async (page = 1, tag=null, category)=>{
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        if(tag){
            url+=`&tag=${tag}`;
        }
        if(category){
            url+=`&category=${category}`;
        }

        try {
            const result = await fetch(url);
            const data = await result.json();
            if(!data.posts || data.posts.length ===0)
                throw new Error("Something went wrong");
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            alert("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        navigate({search : `?page=${page}`});
        setPage(page);
        
    }




    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}