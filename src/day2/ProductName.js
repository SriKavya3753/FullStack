import FunComp from "./FunComp";

function ProductName(){
    return (
    <div>
        <div className='border' style={{display:'flex',margin:'20 20 0'}} >
            <img src="image.png" alt="img" width={450} height={270}/>
            <div style={{padding:"20"}}>
                <h5>Product Name</h5>
                <small>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</small>
            <div style={{marginTop:"70"}}>
                <h5>$500.00</h5>
                <FunComp />
            </div>    
            </div>
        </div>
        <div className='border border-top-0' style={{margin:'0 20',padding:'10'}}>
            <h6 style={{marginTop:10}}>Product specifications</h6>
            <small>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</small>
        </div>
    </div>
    );
}
export default ProductName;