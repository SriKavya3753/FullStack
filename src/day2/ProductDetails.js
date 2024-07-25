import Input from "./Input";
import ProductName from "./ProductName";

function ProductDetails(){
    return (
        <div>
            <h1 style={{marginLeft:'20'}}>Product Name</h1>
            <ProductName />
            <Input />
        </div>    
    );
}
export default ProductDetails;