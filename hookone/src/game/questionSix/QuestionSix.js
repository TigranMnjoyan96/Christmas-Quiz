import React  from "react";
import Modal from "../modal/Modal";
import WrongModal from "../modal/WrongModal";
import './QuestionSix.css'

export default ({question,answer, right,questionPage,wrong,wrongmod,description,points})=>{
    return(
        <div className={'quizsix'}>
            <h2 className={'pointThrough'}>Միավոր {points}</h2>
            <div className={'questionOnesix'}>
                <div>
                    <span className={'Siquestion'}>{question.question1}</span>
                    <span className={'Siquestion1'}>{question.question2}</span>
                    <span className={'Siquestion2'}>{question.question3}</span>
                </div>
                <div className={'questOnesix'}>
                    {question.answers.map(e => {
                        return(
                            <div key  = {e.id} >
                                <form action=''>
                                    <div className={'diviksix'}>
                                        <div className={'radiocontsix'}>
                                            <label className="containersix" onClick={answer.bind(this, e)}>
                                                <input type="radio" name="radio" />
                                                <span className="checkmarksix"></span>
                                            </label>
                                        </div>
                                        <span className={'answersix'}>{e.text}</span>
                                    </div>
                                </form>
                            </div>
                        )
                    })}
                </div>

                {right ? <Modal questionPage = {questionPage} wrong = {wrong} right = {right}/>: wrongmod ?
                    <WrongModal  description={description} questionPage = {questionPage} wrong = {wrong} right = {right}/>:null}
            </div>
        </div>

    )
}