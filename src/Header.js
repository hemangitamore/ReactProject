export function Header(props){
    return(
        <div>
            <h1 style={{color:"red"}}>{props.title}</h1>
            <p style={{color:"blue"}}>{props.description}</p>
            <p style={{color:"green"}}>{props.description}</p>
        </div>

    );

  
}