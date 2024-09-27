import React, {Component} from "react";

class Ikuti extends Component{

    constructor() {
        super()
        this.state={
            message:"bang beliin bakso dong"
        }
    }
    changeMessage() {
        this.setState({
            message:"mantap kang"
        })
    }

render(){
    return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.changeMessage()}>ok bang</button>
        </div>
        )
    }
}
export default Ikuti