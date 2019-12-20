import React from "react"
import './Finish.css'
export default ({points}) => {
    return(

            <div className={'finish'}>
                <p>Դու հավաքեցիք  <span>{points}</span>  միավոր</p>
                <div >
                    <button className={'share'}>կիսվել</button>
                    <button className={'leaders'}>առաջատարներ
                    </button>
                </div>
            </div>



    )
}