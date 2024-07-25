import { useEffect, useState } from "react";
import CartComp from "../day2/CartComp"
function Product(props){
    
    return (
        <div  style={{width: "18rem",margin:'45'}}>
            <div className="card" >
                <img src={props.image} alt="product" width={300} height={300}/>
            </div>
            <div className="card  border border-0">            
                <h5>{props.about}</h5>
                <div style={{display:'flex',alignItems:'flex-end'}}>
                    <img src="ratings.png" alt="rating" width={180} height={30}/>
                    <h6 >(350)</h6> 
                </div>      
                <pre>{props.price}<strike>$3,650</strike></pre> 
            </div>    
            <CartComp />
        </div>
    );
}
export default Product;