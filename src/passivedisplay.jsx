import './passivedisplay.css'

function Passivedisplay({name, value}){
    return (
        <div className="passiveDisplay">
            <div className='nameDiv'>{name}</div>
            <div className='valueDiv'>{value}</div>
        </div>
    )
}

export default Passivedisplay;