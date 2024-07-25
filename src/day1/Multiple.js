import './mutiple.css';
import Profile from "./Profiles";
function Multiple(){
    return (
        <div className="column">
            <div className="row">
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                
       
            </div>
            <div className="row"> 
                <Profile />
                <Profile />
                <Profile />
                <Profile />
        
            </div>
        </div>
    );
}
export default Multiple;