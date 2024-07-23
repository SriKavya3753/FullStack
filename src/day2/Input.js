import { useState } from "react";

function Input(){
    const [getInput, setInputValue] = useState(""); 
    const [getReviews, setReviews] = useState([]);
    const inputValueChange = (event) => {
        setInputValue(event.target.value);
        // console.log(event.target.value);
    }
    const addReview = () => {
        console.log("Adding review"); 
        setReviews([...getReviews, getInput]);
        setInputValue("");
    }
    return (
        <div className='border border-top-0' style={{margin:'0 20 20 20',padding:'20 10'}}>
            <h6>Reviews</h6>
            <div style={{display:'flex'}}>
                <input 
                    type="text" 
                    placeholder="Type to review" 
                    onChange={inputValueChange} 
                    value={getInput} 
                    style={{flex:'1',marginRight:'10'}}
                    className="border rounded"
                />
                <button className="btn btn-dark" onClick={addReview}>Add Review</button>
            </div>
            <h6 style={{marginTop:'15'}}>Reviews</h6>
            {getReviews.map((review, index) => (
                <h6 key={index}>{review}</h6>
            ))}
        </div>
    );
}
export default Input;