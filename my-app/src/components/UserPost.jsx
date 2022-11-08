import React from "react";
import MyButton from "../UI/button/MyButton";

class UserPost extends React.Component{
    constructor(props){
        super(props),
        this.state = {
            id: 0,
            title:"",
            body:"",
           
        }

        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    }

    plus() {
        this.setState({count: this.state.count + 1})
    }

    minus() {
        this.setState({count: this.state.count - 1})
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.plus}>plus</button>
                <button onClick={this.minus}>minus</button>
                <MyButton></MyButton>
            </div>
        )
    }
}

export default UserPost;