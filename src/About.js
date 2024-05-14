import { Component } from "react";

/*export class About extends Component{
    render(){
        return(
          <div>
            <h1 style={{color:"red"}}>Welcome to about page</h1>
            <p>About page description</p>
          </div>
        );
    }
}*/

export function About(){
    return(
        <div>
            <h1 style={{color:"red"}}>Welcome to about page</h1>
            <p style={{fontSize:"20px"}}>About page description</p>
            <p style={{color:"green"}}>In details of about page</p>
          </div>

    );
}

