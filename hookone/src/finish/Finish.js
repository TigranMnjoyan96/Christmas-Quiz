import React from "react"
import './Finish.css'


export default ({points,Leaders,LeaderClass,Leader}) => {
    return(
        <div>
            {Leader ? <div className={LeaderClass}>
                    <div className={'leaderstitle'}>
                        <h2 style={{textAlign:'center',fontSize:'60px'}}>Առաջատարների ցանկ</h2>
                    </div>
                    <table style={{width:'60%'}}>
                        <tr>
                            <td style={{padding:'20px 0',}}></td>
                        </tr>
                        <tr>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td style={{border: 'none', padding: '20px 0'}}></td>
                        </tr>
                    </table>
                </div>:
                <div className={'finish'}>
                    <p>Դու հավաքեցիք  <span>{points}</span>  միավոր</p>
                    <div >
                        <button className={'share'}>կիսվել</button>
                        <button className={'leaders'} onClick={Leaders}>առաջատարներ
                        </button>
                    </div>



                </div>
            }




        </div>

    )
}