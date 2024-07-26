import { useContext,useRef, useState, useEffect } from "react";
import { GlobalContext } from "../App"; //(It becomes consumer of context)

function Login(){
    const [isEqual,setEqual] = useState("");
    const idRef = useRef(null);
    const passwordRef = useRef(null);
    const {setGlobalIsLogin,globalObject} = useContext(GlobalContext);
    localStorage.setItem("name","Sri Kavya");
    localStorage.setItem("branch","AIML");
    useEffect(() => {
         //Set focus to the College Id input field when the component mounts
        idRef.current.focus();
    }, []);
    const formSubmitted = (event) => {
        event.preventDefault();
        if(idRef.current.value === globalObject.collegeId && passwordRef.current.value === globalObject.password){ 
            setEqual("Correct");
            setGlobalIsLogin(true);
        }    
        else
            setEqual("InCorrect");
        idRef.current.value = "";
        passwordRef.current.value = "";
    }
    return (
        <div className="container" style={{display:"flex" ,justifyContent:"center",margin:'30 auto'}}>
            <div className="card" style={{width:"300px",padding:'20px'}} >
                <h1>Login</h1>
                <p>Provide your details to login</p>
                <form onSubmit={formSubmitted}
                    style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                        <label>College Id</label>
                        <input type="text" placeholder="College Id" ref={idRef}/>
                        <label>Password</label>
                        <input type="password" placeholder="Password" ref={passwordRef}/><br></br>
                        <div style={{display:"flex",justifyContent:"flex-end"}}>
                            <button type="submit" className="btn btn-dark" style={{width:"100" ,justifyContent:"flex-end"}} >Login</button>
                        </div>
                        <p>{isEqual}</p>           
                </form>
            </div>
        </div>
        );    
}
export default Login;
{/* <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form> */}