import ReactDOM from "react-dom/client";
//import GetReview from "./dayone/Reviews";
import Product from "./day2/Product";

const rootElement = document.getElementById('root')
const rootRef = ReactDOM.createRoot(rootElement);
rootRef.render(<Product />);
//rootRef.render(<GetReview />);