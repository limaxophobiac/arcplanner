import React from 'react';
export default HoldButton;


function HoldButton({children, callBack, disable, speed}){
    const interval = React.useRef(null);
    const timeout = React.useRef(null)

    React.useEffect(()=> {
        return () => stopCalling();
    }, [disable])

    function startCalling(){
        if (interval.current || timeout.current) return;
        callBack();
        timeout.current = setTimeout(() => {
            interval.current = setInterval(() => {
                if (!disable) callBack();
                else stopCalling();
            }, speed);
            timeout.current = null;
        }, 300);

    }

    function stopCalling(){
        if (timeout.current){
            clearTimeout(timeout.current);
            timeout.current = null;
        }
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