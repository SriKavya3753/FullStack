import { useContext,useState} from "react";
import { GlobalContext } from "../App";
function Profile(){
    const [showPassword, setShowPassword] = useState(false);
    const {globalObject,setGlobalObject} = useContext(GlobalContext);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div style={{display: 'flex', justifyContent:'center',marginTop:"60"}}>
            <div className="card" style={{border:'1px solid red',width: "18rem",display: 'flex', flexDirection: 'column', alignItems: 'left',paddingLeft:'20'}}>
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
            </div>    
        </div>
    );
}
export default Profile;