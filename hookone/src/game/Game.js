import React, {Component} from "react"
import './Game.scss'
import Modal from "./modal/Modal";
import Finish from "../finish/Finish"

export default class Game extends Component {

    state = {
        activeQuestion: 0,
        rightModal: false,
        finish: false,
        quiz: [
            {
                id: 0,
                question: 'Ո՞վ է եղել Կարա Բալան',
                rightAnswer: 2,
                url: 'https://prodigi.am/apps/yerevan2800/assets/uploads/images/c0770-question_1.jpg',
                answers: [
                    {id: 0, text: 'սովորական մուրացկան, ով թափառում էր Երևանի փողոցներով ', sty: '#9575cd deep-purple lighten-2'},
                    {id: 1, text: 'պիեսի հերոս, ով քայլում էր Երևանի փողոցներով և բարձր ասմունքում', sty: '#9575cd deep-purple lighten-2'},
                    {id: 2, text: 'ծաղկավաճառ, ով, լեգենդի համաձայն, անցորդներին ծաղիկ էր վաճառում կամ նվիրում', sty: '#9575cd deep-purple lighten-2'}
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
                            'Հիսուսի օրհնող ձեռքերը ', sty: '#9575cd deep-purple lighten-2'},
                    {id: 1, text: 'Բ)\t\n' +
                            'Շաբաթվա օրերը հաշվարկող ձեռքերը', sty: '#9575cd deep-purple lighten-2'},
                    {id: 2, text: 'Գ)\t\n' +
                            'Արվեստի երիտասարդ նվիրյալներին ծափահարող ձեռքերը', sty: '#9575cd deep-purple lighten-2'}
                ]
            },
            {
                rightAnswer: 0,
                id: 2,
                question: 'Ինչպե՞ս է կոչվում ՆՓԱԿ-ի դիմաց գտնվող Քոչարի այս արձանը',
                url: 'https://prodigi.am/apps/yerevan2800/assets/uploads/images/65d14-question_3.jpg',
                answers: [
                    {id: 0, text: 'Ա)\t\n' +
                            'Մելանխոլիա', sty: '#9575cd deep-purple lighten-2'},
                    {id: 1, text: 'Բ)\t\n' +
                            'էպիդեմիա', sty: '#9575cd deep-purple lighten-2'},
                    {id: 2, text: '\n' +
                            'Գ)\t\n' +
                            'Ինսոմնիա\n' +
                            '\n', sty: '#9575cd deep-purple lighten-2'}
                ]
            }
        ]

    }

    answerHandler = e => {
        console.log(e, this.state.quiz[this.state.activeQuestion].rightAnswer)
        if(e.id === this.state.quiz[this.state.activeQuestion].rightAnswer) {
            e.sty = '#66bb6a green lighten-1'
        } else {
            e.sty = '#c62828 red darken-3'
        }

        this.setState({
            rightModal: true
        })
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
        console.log(this.props.next)
        const {quiz, activeQuestion, rightModal, wrongModal} = this.state
        return(
            <>{!this.state.finish ?
                <div className={'questions'}>
                    <div className="col s12 m7">
                        <h2 className="header">{quiz[activeQuestion].question}</h2>
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src={quiz[activeQuestion].url} />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <ul>
                                        {quiz[activeQuestion].answers.map(j => {
                                            return(

                                                <li onClick={this.answerHandler.bind(this, j)} className={j.sty}>{j.text}</li>
                                            )
                                        })}
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className={'position'}>
                            {rightModal ? <Modal next={this.nextQuestionHandler} /> : null}
                        </div>
                    </div>
                </div> : <Finish />
            }

            </>
        )
    }
}