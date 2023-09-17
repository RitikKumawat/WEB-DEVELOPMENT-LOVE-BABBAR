import React from 'react'
import frameImage from "../assets/frame.png"
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc";


function Template({title,desc1,desc2,image,formtype, setIsLoggedIn}) {
  return (
    <div className='flex w-11/12 justify-between max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 '>
        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>
                {title}</h1>
            <p className='flex flex-col text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className=' text-gray-400'>{desc1}</span>
                <span className=' text-blue-400 italic'>{desc2}</span>
            </p>
            {formtype === "signup" ?
            (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] bg-gray-500 w-full'></div>
                <p className=' text-gray-500 font-medium leading-[1.375rem] '>OR</p>
                <div className='h-[1px] bg-gray-500 w-full'></div>
            </div>
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-gray-300
            border border-gray-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>
        </div>
        <div className='relative w-11/12 max-w-[400px] '>
            <img src={frameImage} alt='img-frame' width={500} height={504}
                loading='lazy'
            />
            <img src={image} alt='Students' width={500} height={490}
                loading='lazy' 
                className='absolute -top-4 right-4'
                />
        </div>
    </div>
  )
}

export default Template