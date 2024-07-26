import { useContext,useEffect,useState} from "react";
import { GlobalContext } from "../App";
import { Navigation } from "./Navigation";
import Home from "./Home";

function Profile(){
    const [showPassword, setShowPassword] = useState(false);
    const {globalObject,setGlobalIsLogin} = useContext(GlobalContext);
    useEffect(()=>{
        const name = localStorage.getItem("name");
        const branch = localStorage.getItem("branch");
        console.log(name);
        console.log(branch);
    })
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);

    };
    const logoutAction = () => { 
        setGlobalIsLogin(false); 
        return <Home />;
    }
    return (
        <div>
            <Navigation />
            <div style={{display: 'flex', justifyContent:'center',marginTop:"60"}}>
                <div className="card" style={{border:'1px solid gray',width: "18rem",display: 'flex', flexDirection: 'column', alignItems: 'left',paddingLeft:'20'}}>
                    <h1>Profile</h1>
                    <p>Your details</p>
                    
                    <p>College Id</p>
                    <b>{globalObject.collegeId}</b>

                    <p>Password</p>
                    <b>
                        {showPassword ? globalObject.password : '••••••••'}
                        <u style={{ cursor: 'pointer' }} onClick={togglePasswordVisibility}>
                            {showPassword ? ' Hide' : ' Show'}
                        </u>
                    </b>

                    <p>Email address</p>
                    <b>{globalObject.email}</b>

                    <p>Branch</p>
                    <b>{globalObject.branch}</b>

                    <p>Year</p>
                    <b>{globalObject.year}</b>

                    <p>Gender</p>
                    <b>{globalObject.gender}</b><br/>
                    <button className="btn btn-dark" style={{marginRight:'15',marginBottom:'10'}} onClick={logoutAction}>Logout</button>
                </div>    
            </div>
        </div>    
    );
}
export default Profile;