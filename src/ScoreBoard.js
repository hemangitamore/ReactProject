import { Component } from "react";

export class ScoreBoard extends Component{
    constructor(){
        super();

        this.state={
            score: 0

        }
        this.increamentScore=this.increamentScore.bind(this);
        this.decreamentScore=this.decreamentScore.bind(this);
}

increamentScore(){
   this.setState({score:this.state.score+4});
}

decreamentScore(){
    this.setState({score:this.state.score-1});

}
    render(){
        return(
            <div>
                <h1>{this.state.score}</h1>
                <button onClick={this.increamentScore}>+</button>
                <button onClick={this.decreamentScore}>-</button>
            </div>
        )
    }
}

