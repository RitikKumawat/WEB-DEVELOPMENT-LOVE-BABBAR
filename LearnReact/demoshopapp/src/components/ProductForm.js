import React, {useState} from 'react';
import './ProductForm.css'


function ProductForm(props){

    // const [fullProductInput, setFullProductInput] = useState({
    //     title:'',
    //     date:''
    // });


    // function titleChangeHandler(event,prevState){
    //     let obj = {...prevState, title:event.target.value};       
    //     console.log(obj);
    //     return obj;
    // }

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');
    
    function titleChangeHandler(event){
        setTitle(event.target.value);
        // console.log(event.target.value);
    }
    function dateChangeHandler(event){
        setDate(event.target.value);
         
    }

    function submitHandler(event){
        event.preventDefault();

        const prouductData = {
            title:newTitle,
            date:newDate
        };
        // console.log(prouductData);
        props.onSaveProduct(prouductData);
        setTitle('');
        setDate('');
    }

    return(<form onSubmit={submitHandler}>
    <div>

        <div className='new-product_control'>
            <label>Title</label>
            <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-product_control'>
            <label>Date</label>
            <input type='date'value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>

        </div>
        <div className='new-product_btn'>
            <button type='submit'>Add Product</button>
        </div>
    </div>
        
    </form>)
}

export default ProductForm;