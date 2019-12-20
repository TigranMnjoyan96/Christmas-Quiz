import React from "react"
import './Rules.css'

function Modal({closepopup}) {


    return (
        <>
            <div className={'rule'}>
                <div className={'ruleModal'}></div>
                <button className={'rulesclosemodal'} onClick={closepopup} >x</button>
            </div>


            {/*{!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}*/}
        </>
    );
}

export default Modal