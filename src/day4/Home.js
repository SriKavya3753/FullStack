import { useContext, useState } from "react";
import { GlobalContext } from "../App";  //(It becomes consumer of context)
import Toggle from "../day3/Toggle";
import { Navigation } from "./Navigation";


function Home(){
    const {globalIsLogin,setGlobalIsLogin} = useContext(GlobalContext);
    return ( 
        <div>    
            {globalIsLogin?
            <div>
                <Navigation/>
                <h1>Welcome to SVES Commerce</h1>
            </div>
            :<Toggle/>}
        </div>
    );
}
export default Home;