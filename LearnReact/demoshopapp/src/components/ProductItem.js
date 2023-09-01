import React, {useState} from "react";

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProuductItem = (props) =>{
    
    const [title, setTitle] = useState(props.title);
    
    // let title = props.title;
     
    function clickHandler(){
        // title = "Popcorn"
        setTitle("Popcorn");
        console.log("Button Clicked");
    }
    
    
    return (
        <Card className="product-item">
            <ProductDate date={props.date} />
            <div className="product-item_description">
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add To Cart</button>

        </Card>
    )
}

export default ProuductItem;