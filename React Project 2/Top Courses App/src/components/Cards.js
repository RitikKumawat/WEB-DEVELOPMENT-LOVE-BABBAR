import React from "react";
import { useState } from "react";
import Card from "./Card";
const Cards = ({courses, category})=>{
    
    
    const [likedCourses, setLikedCourses] = useState([]);

    // It returns array of all courses received from api
    const getCourses = ()=>{
        if(category === "All"){

            let allCourses = [];
            Object.values(courses).forEach( (courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            // only specific category ka aaray pass hoga
            return courses[category];
        }
    }
    
    
    
    return(
        <div className=" flex flex-wrap justify-center gap-4 mb-4">
            
            {!courses? (
                <div>
                    <p>No Data Found</p>
                </div>
            ) : (getCourses().map( (course) =>{
                   
                   return (

                       <Card key={course.id} course = {course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>    
                   )
               }))}
            
            
        </div>
    )
}
export default Cards;