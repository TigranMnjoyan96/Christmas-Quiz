import React, {useState} from "react"
import { Button } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import './Modal.scss'

function Modal({next}) {
    const [show, setShow] = useState(true);

    return (
        <>
            <Alert show={show} variant="success">
                <Alert.Heading className={'duis'}>How's it going?!</Alert.Heading>
                <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                    fermentum.
                </p>
                <hr />
                <div className="d-flex justify-content-end buttons">
                    <button onClick={next} className={'btn btn-dark'} >Next</button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    );
}

export default Modal