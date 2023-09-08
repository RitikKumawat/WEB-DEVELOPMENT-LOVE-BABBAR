import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {

  // const[firstName,setFirstName] = useState("");
  // const[lastName,setLasttName] = useState("");

  // function changeFirstNameHandler(event){
  //   // console.log("Printing First Name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeLastNameHandler(event){
  //   // console.log("Printing Last Name");
  //   // console.log(event.target.value);
  //   setLasttName(event.target.value);
  // }

  const[formData, setFormData] = useState( {firstName:"", lastName:"",email:"",comments:"",isVisible:true, mode:"",favCar:""});
  console.log(formData);
  function changeHandler(event){
    
    const {name,value,checked,type} = event.target;
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name] : type==="checkbox"? checked : value   // we are handling checked box and other form inputs

      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finaaly printing the entireform data.....");
    console.log(formData);
  }

  return (
    <div className='App'>
        <form onSubmit={submitHandler}>
          <input type='text' placeholder='First Name' name='firstName'
          onChange = {changeHandler}
          value={formData.firstName}
          />
          
          <br></br>
         
          <input type='text' placeholder='Last Name' name='lastName'
          onChange = {changeHandler}
          value={formData.lastName}
          />
          <br></br>
         
          <input type='email' placeholder='Enter Your Email Here' name='email'
          onChange = {changeHandler}
          value={formData.email}
          />

          <br></br>
          <textarea placeholder='Enter Your Comments'
            onChange={changeHandler}
            name='comments'
            value={formData.comments}
          />
          <br/><br/>
          <input type='checkbox' onChange={changeHandler} 
          name='isVisible' id='isVisible'
          checked={formData.isVisible}  
          />
          <label htmlFor='isVisible'>Am I Visible ?</label>

          <br/><br/>

          <fieldset>
            <legend>Mode:</legend>

            <input type='radio' onChange={changeHandler}
              name='mode'
              value="Online-Mode"
              id='Online-Mode'
              checked={formData.mode ==="Online-Mode"}
              />
              <label htmlFor='Online-Mode'>Online Mode</label>
          
              <input type='radio' onChange={changeHandler}
              name='mode'
              value="Offline-Mode"
              id='Offline-Mode'
              checked={formData.mode==="Offline-Mode"}
              />
              <label htmlFor='Offline-Mode'>Offline Mode</label>

          </fieldset>

          {/* drop down menu */}
          <select onChange={changeHandler} name='favCar'
          id='favCar' value={formData.favCar} >
          <option value="scorpio">Scarpio</option>
          <option value="fartuner">Fartuner</option>
          <option value="thara">Thara bhai Thar</option>
          <option value="buggy">Dube Buggy</option>
          </select>

          <label htmlFor='favCar'>Select Car</label>         
          <br/><br/>
          <button>Submit</button>



        </form>
    </div>
  );
}

export default App;
