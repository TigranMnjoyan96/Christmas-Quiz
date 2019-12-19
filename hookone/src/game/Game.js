import React, {Component} from "react"
import './Game.css'
import Modal from "./modal/Modal";
import Finish from "../finish/Finish"
import img1 from './gamesImg/valio 2 (1).png'

export default class Game extends Component {

    state = {
        activeQuestion: 0,
        rightModal: false,
        finish: false,
        quiz: [
            {
                id: 0,
                question: 'Նշվածներից ո՞րն է ամենահայտնի ամանօրյա աղցանը',
                rightAnswer: 2,
                url: img1,
                answers: [
                    {id: 0, text: 'Մայրաքաղաքային'},
                    {id: 1, text: 'Թաղային'},
                    {id: 2, text: 'Փողոցային'}
                ]
            },
            {
                rightAnswer: 0,
                id: 1,
                question: 'Ի՞նչ գաղափար է ընկած «Բարեկամության ձեռքեր» քանդակի հիմքում\n' +
                    '\n',
                url: 'https://prodigi.am/apps/yerevan2800/assets/uploads/images/69292-question_2.jpg',
                answers: [
                    {id: 0, text: 'Ա)\t\n' +
                            'Հիսուսի օրհնող ձեռքերը '},
                    {id: 1, text: 'Բ)\t\n' +
                            'Շաբաթվա օրերը հաշվարկող ձեռքերը'},
                    {id: 2, text: 'Գ)\t\n' +
                            'Արվեստի երիտասարդ նվիրյալներին ծափահարող ձեռքերը'}
                ]
            },
            {
                rightAnswer: 0,
                id: 2,
                question: 'Ինչպե՞ս է կոչվում ՆՓԱԿ-ի դիմաց գտնվող Քոչարի այս արձանը',
                url: 'https://prodigi.am/apps/yerevan2800/assets/uploads/images/65d14-question_3.jpg',
                answers: [
                    {id: 0, text: 'Ա)\t\n' +
                            'Մելանխոլիա'},
                    {id: 1, text: 'Բ)\t\n' +
                            'էպիդեմիա'},
                    {id: 2, text: '\n' +
                            'Գ)\t\n' +
                            'Ինսոմնիա\n' +
                            '\n',}
                ]
            }
        ]

    }

    answerHandler = e => {

    }
    nextQuestionHandler = () => {
        this.setState({
            activeQuestion: ++this.state.activeQuestion,
            rightModal: false
        })
        if(this.state.activeQuestion === this.state.quiz.length) {
            this.setState({finish: true})
        }

    }
    render() {
        const {quiz, activeQuestion, rightModal, wrongModal} = this.state
        return(
            <>{!this.state.finish ?
                <div className={'questionOne'}>
                    <div className={'questOne'}>
                        {quiz[activeQuestion].answers.map(j => {
                            return(
                                <div >
                                    <form action=''>
                                        <p onClick={this.answerHandler.bind(this, j)}>
                                            <div className={'circlediv'}>
                                                <label className="container">
                                                    <input type="radio" name="radio" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <span className={'answer'}>{j.text}</span>
                                        </p>
                                    </form>
                                </div>
                            )
                        })}
                    </div>

                    <div className={'position'}>
                        {rightModal ? <Modal next={this.nextQuestionHandler} /> : null}
                    </div>
                </div> : <Finish />
            }

            </>
        )
    }
}