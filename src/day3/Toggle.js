// import { useEffect, useState } from "react";

// function Toggle(){
//     const [message, setMessage] = useState("Login Message");
//     const login = () => {
//         setMessage("Login Message")
//     }
//     const register = () => {
//         setMessage("Register Message")
//     }
//     return (
//         <div>    
//         <button onClick={login}>Login</button>
//         <button onClick={register}>Register</button>
//         <h3>{message}</h3>
//         </div>
//     );
// }
// export default Toggle;
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";


function Toggle() {
    const [message, setMessage] = useState("Login Message");
    const [activeButton, setActiveButton] = useState("login");

    const login = () => {
        setMessage("Login Message");
        setActiveButton("login");
    };

    const register = () => {
        setMessage("Register Message");
        setActiveButton("register");
    };

    const activeStyle = {
        backgroundColor: "gray", // Change to desired highlight color
        color: "white",
    };

    return (
        <div> 
            <button
                onClick={login}
                style={activeButton === "login" ? activeStyle : {}}
            >
                Login
            </button>
            <button
                onClick={register}
                style={activeButton === "register" ? activeStyle : {}}
            >
                Register
            </button>
            {(activeButton === "login")? <Login/>: <Register/>}
        </div>
    );
}

export default Toggle;
