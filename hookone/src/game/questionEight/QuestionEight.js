import React  from "react";
import Modal from "../modal/Modal";
import WrongModal from "../modal/WrongModal";
import './QuestionEight.css'

export default ({question,answer, right,questionPage,wrong,wrongmod,description})=>{
    return(
        <div className={'quiz'}>

            <div className={'questionOne'}>
                <div>
                    <span className={'Eiquestion'}>{question.question1}</span>
                    <span className={'Eiquestion1'}>{question.question2}</span>
                </div>
                <div className={'questOne'}>
                    {question.answers.map(e => {
                        return(
                            <div key  = {e.id} >
                                <form action=''>
                                    <div className={'divik'}>
                                        <div className={'radiocont'}>
                                            <label className="container" onClick={answer.bind(this, e)}>
                                                <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <span className={'answer'}>{e.text}</span>
                                    </div>
                                </form>
                            </div>
                        )
                    })}
                </div>

                {right ? <Modal questionPage = {questionPage} wrong = {wrong} right = {right}/>: wrongmod ?
                    <WrongModal description={description} questionPage = {questionPage} wrong = {wrong} right = {right}/>:null}
            </div>
        </div>

    )
}