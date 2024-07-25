
import CardUI from "./Card";
function CardListUI(){
    // const detail = {name:"John", desc:"Busting social media myths at the Social Media Lab,...",year:"2nd year",branch:"AIML"};
    const details = [{name:["Name1","Name2","Name3","Name4","Name5","Name6","Name7","Name8"]}, 
                    {desc:["this ","is","hi","hello","how","what","why","okay"]},
                    {year:["2nd year","1st year","3rd year","4th year","3rd year","2nd year","1st year","4th year"]},
                    {branch:["AIML","IT","AIDS","CSE","CSC","ECE","EEE","Mech"]}
                    ];
    const users = ["Name1","Name2","Name3","Name4","Name5","Name6","Name7","Name8"]
    return (
        <div style={{display:'flex', flexWrap:'wrap'}}>
        {/* <Navigation/> */}
        {
            details.map(
                (user,index)=> (<CardUI key={index}  
                    fromArray={user} />)
                )
        }
    </div>
    );
}
export default CardListUI;