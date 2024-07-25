import { useEffect, useState } from "react";

function DataFetching(){
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
    return(
        <div>
            {/* {data.map((dataItem,index) => (<div>{dataItem.title}</div>))} */}
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((dataItem,index)=>(
                            <tr key={index}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.title}</td>
                                <td>{dataItem.description}</td>
                                <td>{dataItem.image}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
export default DataFetching;