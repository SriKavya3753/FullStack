import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./day4/Home.js";
import ProductPage from "./day3/ProductPage.js";
import { createContext, useState } from "react";
import Profile from "./day4/Profile.js";

//(It becomes Provider of context)
export const GlobalContext = createContext(); // create context to get access to all of this children components
function App() {
  const [globalIsLogin,setGlobalIsLogin] = useState(false);
  const [globalCount,setGlobalCount] = useState(0);
  const [globalObject, setGlobalObject] = useState({});
 
  return (
    <GlobalContext.Provider 
    value={{globalCount,setGlobalCount,globalObject,setGlobalObject,
    globalIsLogin,setGlobalIsLogin}}>
    {/* It acts as wrapper class which provides the context to all its childs */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}
export default App;
// export default App;
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import { LogNReg } from "./lognreg";
// import { ProductList } from "./productlist";
// import { Product } from "./product";
// export function App(){
//     return(
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<LogNReg/>} />
//                 <Route path="/products" element={<ProductList/>} />
//                 <Route path="/products/product" element={<Product/>} />
//             </Routes>
//         </BrowserRouter>
//     );
// }
