import React from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();
  function clickHandler(){
    navigate('/labs');
  }
  function backHandler(){
    navigate(-1);
  }
  return (<div>
    <div>This is Support PAge</div>
    <button onClick={clickHandler}>MOve to LAbs Page</button>
    <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default Support;