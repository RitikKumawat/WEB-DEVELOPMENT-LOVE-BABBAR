import React, { useState } from 'react';
import './App.css';

function App() {
  
  const[formData, setFormData] = useState({firstName:"",lastName:"",email:"",
  country:"",street:"",city:"",state:"",zip:"",comment:false,candidate:false,offers:false,
  push:""});
  console.log(formData);
  function changeHandler(event){
    const {name,value,checked,type} = event.target;
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name] : type==="checkbox"? checked:value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the entire form's data......");
    console.log(formData);
  }
  
  
  
  return (
    <div className='form-container'>
        <form onSubmit={submitHandler}>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' name='firstName' onChange={changeHandler}
            placeholder='Enter here' value={formData.firstName}/>
            
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' name='lastName' placeholder='Enter here'
              onChange={changeHandler} value={formData.lastName}
            />
            
            <label htmlFor='email'>Email Address</label>
            <input type='email' name='email' placeholder='Enter here'
              onChange={changeHandler} value={formData.email}
            />
            
            <label htmlFor='country'>select country</label>
            <select name='country' onChange={changeHandler} value={formData.country}>
                <option value='india'>India</option>
                <option value='america'>America</option>
                <option value='UK'>UK</option>
                <option value='brazil'>Brazil</option>
                <option value='poland'>Poland</option>
                <option value='australia'>Australia</option>
            </select>
            
            <label htmlFor='street'>Street Address</label>
            <input type='text' name='street' placeholder='Enter here'
              onChange={changeHandler} value={formData.street}
            />
            
            <label htmlFor='city'>City</label>
            <input type='text' name='city' placeholder='Enter here'
              onChange={changeHandler} value={formData.city}
            />
            
            <label htmlFor='state'>State/Province</label>
            <input type='text' name='state' placeholder='Enter here'
              onChange={changeHandler} value={formData.state}
            />
            
            <label htmlFor='zip'>ZIP/ Postal Code</label>
            <input type='text' name='zip' placeholder='Enter here'
              onChange={changeHandler} value={formData.zip}
            />
            <p>By Email</p>
            <div className='checkbox1'>
              <input type='checkbox' name='comment' onChange={changeHandler}
                checked={formData.comment}
              />
              <label htmlFor='comment'>Comments</label>
            </div>
              <p>Get notified when someone posts a comment on a posting</p>
              
              
            
            <div className='chekbox1'>
              <input type='checkbox' name='candidate' onChange={changeHandler}
                checked={formData.candidate}
              />
              <label htmlFor='candidate'>Candidates</label>
            </div>
            <p>Get notified when a candidate applies for a job</p>
            
            <div className='checkbox1'>
              <input type='checkbox' name='offers' onChange={changeHandler}
                checked={formData.offers}
              />
              <label htmlFor='offers'>Offers</label>
            </div>
            <p>Get notified when a candidate accepts or rejects an offer</p>
            

            <div className='field'>
              <label htmlFor='field'>Push Notifications</label>
              <p>These are delivered via SMS to your mobile phone</p>
              <div className='radioss'>
                <input type='radio' name='push' value='everything'
                  onChange={changeHandler} checked={formData.push==="everything"}
                />
                <label htmlFor='everything'>Everything</label>
              </div>
              <div className='radioss'>
                <input type='radio' name='push' value='same'
                  onChange={changeHandler} checked={formData.push==="same"}
                />
                <label htmlFor='same'>Same as email</label>
              </div>  

              <div className='radioss'>
                <input type='radio' name='push' value='noPush'
                  onChange={changeHandler} checked={formData.push==="noPush"}
                />
                <label htmlFor='noPush'>No push notifications</label>
              </div>
              
            </div>

            <button className='btn'>Save</button>


        </form>
    </div>
  );
}

export default App;
