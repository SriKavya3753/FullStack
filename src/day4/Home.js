import { createContext, useState } from "react";
import Toggle from "../day3/Toggle";
import { Navigation } from "./Navigation";
//(It becomes Provider of context)
export const UserContext = createContext(); // create context to get access to all of this children components
function Home(){
    const [isLogin,setIsLogin] = useState(false);
    return (
        <UserContext.Provider
        value={{isLogin,setIsLogin}}> 
        {/* It acts as wrapper class which provides the context to all its childs */}
        <div>    
            {isLogin?
            <div>
                <Navigation/>
                <h1>Welcome to SVES Commerce</h1>
            </div>
            :<Toggle/>}
        </div>

        </UserContext.Provider>
    );
}
export default Home;