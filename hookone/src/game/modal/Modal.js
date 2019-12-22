import React from "react"
import './Modal.scss'

function Modal({wrong,description}) {


    return (
        <>
            <div className={'rightall'}>
                <div className={'rightModal'}>
                    <div className={'description'}>{description}</div>
                    <button className={'closemodal'} onClick={wrong}>Հաջորդը <i className="fa fa-arrow-right"></i></button>
                </div>
            </div>


            {/*{!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}*/}
        </>
    );
}

export default Modal