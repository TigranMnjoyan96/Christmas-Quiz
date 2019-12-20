import React from "react"
import './Modal.scss'

function Modal({wrong}) {


    return (
        <>
            <div className={'rightall'}>
                <div className={'rightModal'}></div>
                <button className={'closemodal'} onClick={wrong}>Հաջորդը <i className="fa fa-arrow-right"></i></button>
            </div>


            {/*{!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}*/}
        </>
    );
}

export default Modal