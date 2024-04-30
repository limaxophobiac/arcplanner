import './passivedisplay.css'

function Passivedisplay({name, value, valueWidth = 3}){
    return (
        <div className="passiveDisplay">
            <div className='nameDiv'>{name}</div>
            <div className='valueDiv' style={{minWidth: valueWidth + "rem"}}>{value}</div>
        </div>
    )
}

export default Passivedisplay;