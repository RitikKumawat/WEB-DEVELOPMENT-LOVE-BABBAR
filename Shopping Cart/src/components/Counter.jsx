import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

function Counter() {

    //useSelector is used to access data from a slice
    const count = useSelector((state)=>state.counter.value);

    // to call the functionality of increment and decrement we will use dispatch
    const dispatch = useDispatch();

  return (
    <div>
        <button onClick={()=>dispatch(increment())} >
            Increment
        </button>
        <br/>
        <br/>

        <div>{count}</div>

        <br/>
        <br/>
        <button onClick={()=>dispatch(decrement())}>
            Decrement
        </button>
    </div>
  )
}

export default Counter