import { useEffect, useState } from "react";
import axios from 'axios';
function Axios(){
    const [data,setData] = useState([]);
    useEffect(() => {
        const fetchMyData = async () => {
            const res = await axios('https://fakestoreapi.com/users');
            console.log(res);
            console.log(res.data);
            const resData = await res.data;
            setData(resData);
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
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Phone</th>
                    <th scope="col">City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((dataItem,index)=>(
                            <tr key={index}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.name.firstname}</td>
                                <td>{dataItem.name.lastname}</td>
                                <td>{dataItem.username}</td>
                                <td>{dataItem.email}</td>
                                <td>{dataItem.password}</td>
                                <td>{dataItem.phone}</td>
                                <td>{dataItem.address.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Axios;