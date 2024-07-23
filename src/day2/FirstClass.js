import React from "react";

class FirstClass extends React.Component {
    count = 0;
    names = "react";
    constructor(){
        super();
        this.state = {num : 0}
        console.log("constructor");
    }
    componentDidMount(){
        console.log("Component Mounted");
        // console.log(this.count);
        // console.log(this.count + 1);
        console.log(this.state.num);
        console.log(this.state.num + 1);
    }
    componentDidUpdate(){
        console.log("Incremented");
    }
    componentWillUnmount(){
        console.log("Component will be UnMounted");
    }
    funcBtnClick = () => {
        console.log("Button Clicked!");
        // this.count += 1;
        // console.log(this.count);
        this.setState({num : this.state.num + 1}); // update the state of num
        console.log(this.state.num);
    }
    render(){
        return(
            <div>
                <h2>This is the {this.num}st class Component of {this.names} {this.state.num}</h2>
                <button class="btn btn-primary" onClick={this.funcBtnClick}>Click here</button>
            </div>
        );
    }
}
export default FirstClass;