import { Component } from "react";
class MyForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            message:''
        };
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);

    }

    handleChange(event){
        const {name,value}=event.target;
        this.setState({
            [name]:value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('Form submitted:',this.state);
    }

    render(){
        return(

            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

                    </label>

                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </label>

                </div>

                <div>

                    <label>
                        Message:
                        <textarea name="message"
                        value={this.state.message}
                        onChange={this.handleChange}/>
                    </label>
                </div>

                <button type="submit">Submit</button>

            </form>

        );
    }
}

export default MyForm;

