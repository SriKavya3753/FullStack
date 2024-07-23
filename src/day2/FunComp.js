import { useEffect, useState } from "react";
//Hooks 
function FunComp(){
    // const count = 0;
    const [count, setCount] = useState(0);
    useEffect(() =>{
        // setCount(5);
        console.log("Use effect is called");
    });
    const btnUpdateInc = () => {
        setCount(count+1);
    }
    const btnUpdateDecr = () => {
        if(count > 0)
            setCount(count-1);
    }
    const AddToCart = () => { 
        setCount(1);
    }  
    return (
        <div>
            {
            (count === 0)?<button className="btn btn-dark" onClick={AddToCart} style={{backgroundColor:"green"}}>Add to Cart</button> 
            :(
            <div style={{display:"flex"}}>
                <button className="btn btn-light" onClick={btnUpdateDecr} style={{border:"2px solid grey",margin:"2px"}}>-</button>
                <h1 style={{margin:"0 10px"}}>{count}</h1>
                <button className="btn btn-light" onClick={btnUpdateInc} style={{border:"2px solid grey",margin:"2px"}}>+</button>
            </div>
            )          
        }
        </div>
    );  
}
export default FunComp;