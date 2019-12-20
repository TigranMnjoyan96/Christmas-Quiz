import React from "react"
import './WrongModal.css'

function Modal({wrong,description}) {


    return (
        <>
            <div className={'wrongall'}>
                <div className={'wrongModal'}></div>
                <button className={'closemodal'} onClick={wrong}>Հաջորդը <i className="fa fa-arrow-right"></i></button>
                <div className={'description'}>{description}</div>
            </div>


            {/*{!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}*/}
        </>
    );
}

export default Modal