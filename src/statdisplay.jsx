import './statdisplay.css'

function Statdisplay({adder, name, value, assigned, max = 20, hasPoints= true}){

    return (
        <div className="statDisplay">
            
            <div className='nameDiv'>{name}</div>
            <button onClick={() => adder(-1)} disabled={assigned <= 0}>{"<"}</button>
            <div className='valueDiv'style={value > max ? {color: 'red'} : {}}>{value}</div>
            <button onClick={() => adder(1)} disabled={value >= max || !hasPoints}>{">"}</button>
            
        </div>
    )
}

export default Statdisplay;