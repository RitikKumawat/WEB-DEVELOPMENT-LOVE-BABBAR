import './NewProduct.css'

import ProductForm from './ProductForm';
function NewProduct(props){
    
    function saveProduct(product){
        console.log("Inside new Product")
        console.log(product)

        props.ritik(product);
    }
    
    return (
        <div className='new-product'>
            <ProductForm onSaveProduct = {saveProduct}>

            </ProductForm>
        </div>
    )
}

export default NewProduct;