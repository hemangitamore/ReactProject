


 /*export class Home extends Component{
    render(){
        return(
            <div>
                <h1>
                    Welcome to react.js
                </h1>
                <p>Home page description</p>
            </div>
   

        );
    }
};*/

/*export function Home(){
    return(
        <div>
        <h1>
            Welcome to react.js
        </h1>
        <p>Home page description</p>
    </div>
    );
}*/

import { Component } from "react";
import { Header } from "./Header";

export class Home extends Component{
    render(){
        return (
            <div>
                <Header title="Home title" description="this is home component" />
                <h1>Welcome to Home</h1>
            </div>
        );
    }
}