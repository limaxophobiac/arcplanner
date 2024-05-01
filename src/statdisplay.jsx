import './statdisplay.css'
import HoldButton from './holdbutton.jsx'

function Statdisplay({adder, name, value, assigned, max = 20, hasPoints= true, min = 0, valueWidth = 3, disable = false, hold = true, holdSpeed = 150}){

    return (
        <div className="statDisplay">
            
            <div className='nameDiv'>{name}</div>
            {!hold ? <button onClick={() => adder(-1)} disabled={assigned <= min || disable}>{"<"}</button> : null}
            {hold ? <HoldButton callBack={() => adder(-1)} disable={assigned <= min || disable} speed={holdSpeed}>{"<"}</HoldButton> : null}
            <div className='valueDiv'style={value > max ? {color: 'red', minWidth: valueWidth + "rem"} : { minWidth: valueWidth + "rem"} }>{value}</div>
            {!hold ? <button onClick={() => adder(1)} disabled={value >= max || !hasPoints || disable}>{">"}</button> : null}
            {hold ?<HoldButton callBack={() => adder(1)} disable={value >= max || !hasPoints || disable} speed={holdSpeed}>{">"}</HoldButton> : null}
        </div>
    )
}

export default Statdisplay;