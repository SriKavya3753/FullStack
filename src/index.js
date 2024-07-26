import ReactDOM from "react-dom/client";
import App from "./App";

// import Cart from "./day3/Cart";


//import Multiple from "./dayone/Multiple";
//import DataFetching from "./daythree.js/DataFetching";
// import Cart from "./daythree.js/Cart";
// import Axios from "./day4/Axios";
//import CartList from "./day3/CartList";
const rootElement = document.getElementById("root");
const rootRef = ReactDOM.createRoot(rootElement);
//rootRef.render(<DataFetching />);
// rootRef.render(<Profile/>);
rootRef.render(<App />);
