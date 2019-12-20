import React from "react"
import './Rules.css'

function Modal({closepopup}) {


    return (
        <>
            <div className={'rule'}>
                <div className={'ruleModal'}></div>
                <button className={'closemodal'} onClick={closepopup} >x</button>
            </div>


            {/*{!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}*/}
        </>
    );
}

export default Modal