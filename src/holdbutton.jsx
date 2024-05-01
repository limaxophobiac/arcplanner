import React from 'react';
export default HoldButton;


function HoldButton({children, callBack, disable, speed}){
    const interval = React.useRef(null);

    React.useEffect(()=> {
        return () => stopCalling();
    }, [disable])

    function startCalling(){
        if (interval.current) return;
        interval.current = setInterval(() => {
            if (!disable) callBack();
            else stopCalling();
        }, speed);
    }

    function stopCalling(){
        if (interval.current){
            clearInterval(interval.current);
            interval.current = null;
        }
    }

    return (
        <button disabled={disable} onMouseDown={startCalling} onMouseUp={stopCalling} onMouseLeave={stopCalling}>
            {children}
        </button>
    )
}