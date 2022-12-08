function BoxColor (props) {
   

    const background ={
        backgroundColor: `rgb( ${props.r}, ${props.g} , ${props.b})`,

        
    }
    
    return (

        <div className="box" style={background}>
        <p className="rgbColors"> rgb= ({props.r},{props.g},{props.b})</p>
    
        <h2 className="hex">
          
          {('0' + props.r.toString(16)).slice(-2) +
            ('0' + props.g.toString(16)).slice(-2) +
            ('0' + props.b.toString(16)).slice(-2)}
        </h2>
        </div>
    );
}

export default BoxColor