import React from "react"
import './WrongModal.css'

function Modal({wrong}) {


    return (
        <>
            <div className={'wrongall'}>
                <div className={'wrongModal'}></div>
                <button className={'closemodal'} onClick={wrong}>x</button>
            </div>


            {/*{!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}*/}
        </>
    );
}

export default Modal