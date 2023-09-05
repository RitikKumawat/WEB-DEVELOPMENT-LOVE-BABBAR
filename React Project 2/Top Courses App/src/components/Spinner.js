import React from "react";
import { MetroSpinner } from "react-spinners-kit";
const Spinner = ()=>{
    return(
        <div className=" flex flex-col items-center space-y-2">
            <div className='spinner'></div>
            <MetroSpinner size={40} color="black"/>
            <p className=" text-white text-lg font-semibold">Loading......</p>
        </div>
    )
}

export default Spinner;