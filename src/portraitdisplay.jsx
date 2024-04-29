function Portraitdisplay(portraits, index, setIndex){
    return (
        <div className="PortraitDisplay">
            <img className="Portrait" src={portraits[index]} alt="portrait"/>
            <button onClick={() => setIndex((index + portraits.length -1) % portraits.length)}>Prev</button>
            <button onClick={() => setIndex((index + 1) % portraits.length)}>Next</button>
        </div>
    )
}

export default Portraitdisplay;