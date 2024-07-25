import { useContext,useRef, useState, useEffect } from "react";
import { UserContext } from "../day4/Home"; //(It becomes consumer of context)

function Login(){
    const [isEqual,setEqual] = useState("");
    const idRef = useRef(null);
    const passwordRef = useRef(null);
    const {isLogin,setIsLogin} = useContext(UserContext);
    useEffect(() => {
         //Set focus to the College Id input field when the component mounts
        idRef.current.focus();
    }, []);
    const formSubmitted = (event) => {
        event.preventDefault();
        if(idRef.current.value === passwordRef.current.value){ 
            setEqual("Correct");
            setIsLogin(true);
        }    
        else
            setEqual("InCorrect");
        idRef.current.value = "";
        passwordRef.current.value = "";
    }
    return (
       <div style={{display:'flex',justifyContent:"center",marginTop:'40'}}>
             <div className="card" style={{width:'300',padding:'5',alignItems:"center"}}>
                 <div style={{ display: 'flex', flexDirection:"column", justifyContent: 'flex-start' }}>
                     <h3>Login</h3>
                     <p>Provide your details to login</p>
                 </div>
                 <form onSubmit={formSubmitted}>
                     <label className="form-label" >College Id</label><br/>
                     <input type="text" placeholder="College Id" ref={idRef}/><br/>
                     <label className="form-label">Password</label><br/>
                     <input type="password" placeholder="Password" ref={passwordRef}/><br/><br />
                     <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                     <button className="btn btn-dark">Login</button>
                     </div>
                 </form>
                 <h1>{isEqual}</h1>
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