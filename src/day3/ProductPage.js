import { useEffect, useState } from "react";
import Product from "./Product";
//import { Link } from "react-router-dom";
import { Navigation } from "../day4/Navigation";
function ProductPage(){
    const [data,setData] = useState([]);
    useEffect(() => {
        const fetchMyData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            console.log(res.ok);
            const resData = await res.json();
            setData(resData);
            console.log(resData);
        }
        fetchMyData();
    },[])
    return (
        <div>
        <Navigation />
            <div style={{display:'flex',flexWrap:'wrap'}}>
            {
                data.map((dataItem,index)=>(
                    <div key={index}>
                        <Product
                        about={dataItem.title}
                        price={dataItem.price}
                        image={dataItem.image}
                        />
                    </div>
                )) 
            }
            </div>
        </div>
    );
}
export default ProductPage;