import './statdisplay.css'

function Statdisplay({adder, name, value, assigned, max = 20, hasPoints= true, min = 0, valueWidth = 3, disable = false}){

    return (
        <div className="statDisplay">
            
            <div className='nameDiv'>{name}</div>
            <button onClick={() => adder(-1)} disabled={assigned <= min || disable}>{"<"}</button>
            <div className='valueDiv'style={value > max ? {color: 'red', minWidth: valueWidth + "rem"} : { minWidth: valueWidth + "rem"} }>{value}</div>
            <button onClick={() => adder(1)} disabled={value >= max || !hasPoints || disable}>{">"}</button>
            
        </div>
    )
}

export default Statdisplay;