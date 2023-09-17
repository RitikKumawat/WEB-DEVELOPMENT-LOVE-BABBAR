import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
function SignUpForm({setIsLoggedIn}) {
    const navigate =useNavigate();
    const [formData,setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    function changeHandler(event){
        setFormData((prevData)=>(
            {

                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    const [showConfirmPassword, setConfirmPassword] = useState(false);
    const [showCreatePassword, setCreatePassword] = useState(false);

    const [accountType,setAccountType] = useState("student");
    function submitHandler(event){
        event.preventDefault();
        if(formData.password!== formData.confirmPassword){
            toast.error("Passwords do not match");
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        }
        console.log("printing account data");
        console.log(accountData);
        navigate("/dashboard");

    }
    return (
    <div className='  '>
        {/* student-instructor tab */}
        <div 
        className='flex bg-gray-700 p-1 gap-x-1 my-6 rounded-full max-w-max '>
            <button onClick={()=> setAccountType("student")}
            className={`${accountType === "student"?
            " bg-black text-gray-100"
            : " bg-transparent text-gray-400"} py-2 px-5 rounded-full transition-all duration-200`}>
                Student
            </button>

            <button 
             className={`${accountType === "instructor"?
            " bg-black text-gray-100"
            : " bg-transparent text-gray-400"} py-2 px-5 rounded-full transition-all duration-200`} 
             onClick={()=>setAccountType("instructor")}>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            {/* firstname and lastname */}
            <div className='w-full flex gap-x-4 mt-[20px]'>

                <label className='w-full '>
                    <p className='text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem]'>
                     First Name<sup  className=' text-pink-500'>*</sup></p>
                    <input 
                        required
                        type='text'
                        name='firstname'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.firstname}
                        className=' bg-gray-700 rounded-[0.5rem] text-gray-100 w-full p-[12px]'

                    />
                </label>
            
                <label className='w-full'>
                    <p className='text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem]'>
                        Last Name<sup  className=' text-pink-500'>*</sup></p>
                    <input 
                        required
                        type='text'
                        name='lastname'
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={formData.lastname}
                        className=' bg-gray-700 rounded-[0.5rem] text-gray-100 w-full p-[12px]'

                    />
                </label>
            
            </div>
            {/* email */}
            <div className='mt-[20px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem]'>
                        Email Address<sup  className=' text-pink-500'>*</sup></p>
                    <input 
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email}
                        className=' bg-gray-700 rounded-[0.5rem] text-gray-100 w-full p-[12px]'

                    />
            </label>
            </div>
            

            {/* createPassword and Confirm Password  */}
            <div className='w-full flex gap-x-4 mt-[20px]'>
            <label className='relative w-full'>
                    <p className='text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem]'>
                        Create Password<sup  className=' text-pink-500'>*</sup></p>
                    <input 
                        required
                        type={showCreatePassword ? ("text"):("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                        className=' bg-gray-700 rounded-[0.5rem] text-gray-100 w-full p-[12px]'

                    />
                    <span className='absolute right-3 top-[38px] cursor-pointer'
                     onClick={()=>{
                        setCreatePassword((prev)=>!prev)
                         }}>
                        {showCreatePassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
            </label>

            <label className='relative w-full'>
                    <p className='text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem]'>
                        Confirm Password<sup  className=' text-pink-500'>*</sup></p>
                    <input 
                        required
                        type={showConfirmPassword ? ("text"):("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        className=' bg-gray-700 rounded-[0.5rem] text-gray-100 w-full p-[12px]'

                    />
                    <span className='absolute right-3 top-[38px] cursor-pointer'
                     onClick={()=>{
                        setConfirmPassword((prev)=>!prev)
                         }}>
                        {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
            </label>
            </div>
            <button className='w-full bg-yellow-300 rounded-[8px] font-medium text-gray-800 px-[12px] py-[8px] mt-7'>
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignUpForm