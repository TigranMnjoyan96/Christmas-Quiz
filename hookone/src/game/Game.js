import React, {Component} from "react"
import './Game.css'
import FirstQuestion from "./firstQuestion/FirstQuestion";
import SecondQuestion from "./secondQuestion/SecondQuestion";
import Finish from "../finish/Finish"
import QuestionThree from "./questionThree/QuestionThree";
import QuestionFour from "./questionFour/QuestionFour";
import QuestionFive from "./QuestionFive/QuestionFive";
import QuestionSix from "./questionSix/QuestionSix";
import QuestionSeven from "./questionSeven/QuestionSeven";
import QuestionEight from "./questionEight/QuestionEight";
import QuestionNine from "./questionNine/QuestionNine";
import LastQuestion from "./lastQuestion/LastQuestion";

export default class Game extends Component {

    state = {
        questionPage:0,
        points: 0,
        rightModal: false,
        wrongModal:false,
        finish: false,
        time:0,
        time1:0,
        answerTime:false,
        quiz: [
            {
                id: 0,
                question1: 'Ֆինլանդիայի հյուսիսային քաղաքներում ո՞ր ',
                question2:'կենդանիներն են ազատ զբոսնում փողոցներում․\n',
                rightAnswer: 0,
                description:'Ինչպես գիտեք, Ձմեռ պապիկի նստավայրը՝ Լապլանդիան, գտնվում է Վալիոյի հայրենիք Ֆինլանդիայում․ ' +
                    'հենց այս պատճառով այստեղի հյուսիսային քաղաքներում հաճախ կարելի է հանդիպել Ձմեռ պապու հավատարիմ բարեկամներին։',
                answers: [
                    {id: 0, text: 'Եղջերուները   '},
                    {id: 1, text: 'Կոկորդիլոսները'},
                    {id: 2, text: 'Դաշտամկները'}
                ]
            },
            {
                id: 1,
                question1: 'Նշվածներից ո՞րն է',
                question2:'ամենահայտնի ամանօրյա աղցանը',
                rightAnswer: 0,
                description:'Առանց լեգենդար «Մայրաքաղաքային» աղցանի Ամանորը Ամանոր չի լինի։',
                answers: [
                    {id: 0, text: 'Մայրաքաղաքային'},
                    {id: 1, text: 'Թաղային'},
                    {id: 2, text: 'Փողոցային'}
                ]
            },
            {
                id: 2,
                question1: ' Ի՞նչ ուտեստ է պատկերված նկարում։  ',
                rightAnswer: 1,
                description:'Կիևյան կոտլետները նույնպես դարձել են մեր ամանորյա սեղանի անբաժան մասնիկներից մեկը։ ' +
                    'Համեղ կոտլետներ պատրաստելու համար Ձեզ անհրաժեշտ կլինի աղացած հավի միս, ' +
                    'Valio Master Butter կարագ, պաքսիմատ, ձու, կանաչի, սխտոր ու նախատոնական բարձր տրամադրություն։',
                answers: [
                    {id: 0, text: 'Լազանյա '},
                    {id: 1, text: 'Կիևյան կոտլետ '},
                    {id: 2, text: '  Քուֆթա'}
                ]
            },
            {
                id: 3,
                question1: 'Կարո՞ղ են արդյոք բուսակերները',
                question2:' օգտագործել Oltermanni պանիր։',
                rightAnswer: 2,
                description:'Հրաշալի նորություն է, չէ՞․ Oltermanni պանրի արտադրության մեջ օգտագործվում է միայն մանրէաբանական ճանապարհով ստացված ռենինը, ' +
                    'ինչի շնորհիվ  Լակտո բուսակերները ևս կարող են բազմազան ճաշացանկ ունենալ Ամանորին։',
                answers: [
                    {id: 0, text: 'Այո'},
                    {id: 1, text: ' Ոչ'},
                    {id: 2, text: ' Միայն լակտո բուսակերները '}
                ]
            },
            {
                id: 4,
                question1: 'Ի՞նչ տորթ է պատկերված նկարում։ ',
                rightAnswer: 1,
                description:'Նկարում պատկերված է քաղցրահամ «Պրահա» տորթը։ Ավելացրեք այն Ձեր տոնական թխվածքների մեջ։ Անհրաժեշտ բաղադրիչներ՝ ալյուր, ձու,' +
                    ' Valio Master Butter կարագ, շաքարավազ, խտացրած կաթ, կակաո, վանիլին և շոկոլադ։',
                answers: [
                    {id: 0, text: 'Թռչնի կաթ  '},
                    {id: 1, text: 'Պրահա'},
                    {id: 2, text: 'Միկադո'}
                ]
            },
            {
                id: 5,
                question1: 'Ամանորին ամենաշատն օգտագործվող պրոդուկտներից' ,
                question2:    ' մեկը պանիրն է։ Իսկ գիտեք՝ որքա՞ն է կազմում ',
                question3: 'VIOLA հալած պանրի կալորիականությունը 100 գրամում։ ',

                rightAnswer: 0,
                description:'Այս պանիրը պատրաստվում է մի քանի տեսակի բարձրորակ պանիրներից, ' +
                    'ուստի այն ունի այդպիսի հարուստ սննդային արժեք և պարունակում է մի շարք օգտակար սննդանյութեր։',
                answers: [
                    {id: 0, text: '308 կկալ'},
                    {id: 1, text: '212 կկալ '},
                    {id: 2, text: ' 426 կկալ'}
                ]
            },
            {
                id: 6,
                question1: ' Valio ապրանքանիշի ո՞ր ',
                question2:'պանիրն է հիանալի համադրվում գինու հետ։ ',
                rightAnswer: 1,
                description:'Նշված պանիրներից գինու հետ լավագույնս համադրվում է ' +
                    'Oltermanni-ն։ Չմոռանաք բաժակները բարձրացնել 2020-ի հաջողությունների համար։  ',
                answers: [
                    {id: 0, text: 'VIOLA հալած պանիր   '},
                    {id: 1, text: 'Oltermanni '},
                    {id: 2, text: 'VIOLA հալած շերտավոր պանիր'}
                ]
            },
            {
                id: 7,
                question1: 'Այս համեղ տոնական թխվածքներից',
                question2:' որի՞ մեջ է օգտագործվում Valio Master Butter կարագ։ ',
                rightAnswer: 2,
                description:'Նշված թխվածքներից միայն Տիրամիսու պատրաստելիս կարող եք օգտագործել Valio Master Butter կարագ,' +
                    ' քանի որ մյուս երկու թխվածքները սովորաբար պատրաստվում են առանց կարագի։',
                answers: [
                    {id: 0, text: 'Կուլիչ'},
                    {id: 1, text: ' Crazy Cake'},
                    {id: 2, text: ' Տիրամիսու'}
                ]
            },
            {
                id: 8,
                question1: 'Տոների ընթացքում մարդիկ հաճախ են դա անում, ' ,
                question2:   'որի ընթացքում էլ հաճախ կրկնում են «Ասա պանիր» ',
                question3: 'արտահայտությունը։ Ինչի՞ մասին է խոսքը։ ',
                rightAnswer: 1,
                description:'Դե իհարկե, գրեթե ամբողջ աշխարհում ընդունված արտահայտություն, որը սովորաբար ասում են լուսանկարվելիս։ ' +
                    'Ի դեպ, ֆիննական ընտանիքների կողմից ամենասիրված պանիրը պատկանում է հենց Valio ապրանքանիշին։ ',
                answers: [
                    {id: 0, text: 'Երգելու  '},
                    {id: 1, text: 'Լուսանկարվելու'},
                    {id: 2, text: 'Կենաց ասելու '}
                ]
            },
            {
                id: 9,
                question1: ' Հայտնի բրիտանական երաժշտական խումբ, ',
                question2: 'որի անվանումը սերտ կապ ունի Valio-ի ապրանքատեսակների հետ։',
                rightAnswer: 2,
                description:'Առաջարկում ենք հենց հիմա միացնել այս խմբի Sing it back երգն ու մի լաաավ լիցքաթափվել։ Շնորհավոր Ամանոր ',
                answers: [
                    {id: 0, text: 'The Rolling stones  '},
                    {id: 1, text: 'Spice Girls'},
                    {id: 2, text: 'Moloko '}
                ]
            },

        ],
    }



    answerHandler = e => {
        if(this.state.questionPage === 0 && e.id === this.state.quiz[this.state.questionPage].rightAnswer){
            this.setState({
                answerTime:true,
                rightModal:true,
                wrongModal:false
            })
        }
        else{
            this.setState({
                answerTime:true,
                wrongModal:true,

            })
        }
       if(this.state.questionPage === 1 && e.id === this.state.quiz[this.state.questionPage].rightAnswer){
            this.setState({
                answerTime:true,
                rightModal:true
            })
        }
       else{
           this.setState({
               answerTime:true,
               wrongModal:true,

           })

       }
        if(this.state.questionPage === 2 && e.id === this.state.quiz[this.state.questionPage].rightAnswer){
            this.setState({
                answerTime:true,
                rightModal:true,
                wrongModal:false
            })
        }
        else{
            this.setState({
                answerTime:true,
                wrongModal:true,

            })
        }
        if(this.state.questionPage === 3 && e.id === this.state.quiz[this.state.questionPage].rightAnswer){
            this.setState({
                answerTime:true,
                rightModal:true,
                wrongModal:false
            })
        }
        else{
            this.setState({
                answerTime:true,
                wrongModal:true,

            })
        }
        if(this.state.questionPage === 4 && e.id === this.state.quiz[this.state.questionPage].rightAnswer){
            this.setState({
                answerTime:true,
                rightModal:true,
                wrongModal:false
            })
        }
        else{
            this.setState({
                answerTime:true,
                wrongModal:true,

            })
        }
        if(this.state.questionPage === 5 && e.id === this.state.quiz[this.state.questionPage].rightAnswer){
            this.setState({
                answerTime:true,
                rightModal:true,
                wrongModal:false
            })
        }
        else{
            this.setState({
                answerTime:true,
                wrongModal:true,

            })
        }
        if(this.state.questionPage === 6 && e.id === this.state.quiz[this.state.questionPage].rightAnswer){
            this.setState({
                answerTime:true,
                rightModal:true,
                wrongModal:false
            })
        }
        else{
            this.setState({
                answerTime:true,
                wrongModal:true,

            })
        }
        if(this.state.questionPage === 7 && e.id === this.state.quiz[this.state.questionPage].rightAnswer){
            this.setState({
                answerTime:true,
                rightModal:true,
                wrongModal:false
            })
        }
        else{
            this.setState({
                answerTime:true,
                wrongModal:true,

            })
        }
        if(this.state.questionPage === 8 && e.id === this.state.quiz[this.state.questionPage].rightAnswer){
            this.setState({
                answerTime:true,
                rightModal:true,
                wrongModal:false
            })
        }
        else{
            this.setState({
                answerTime:true,
                wrongModal:true,

            })
        }
        if(this.state.questionPage === 9 && e.id === this.state.quiz[this.state.questionPage].rightAnswer){
            this.setState({
                answerTime:true,
                rightModal:true,
                wrongModal:false
            })
        }
        else{
            this.setState({
                answerTime:true,
                wrongModal:true,

            })
        }
       if(this.state.rightModal){
           this.setState({
               points:++this.state.points
           })
       }
    }
    nextQuestionHandler = () => {
        this.setState({
            questionPage: ++this.state.questionPage,
            answerTime:false,
            rightModal: false,
            wrongModal:false,
        })
        console.log(this.state.finish)

        if(this.state.questionPage === this.state.quiz.length ) {
            this.setState({finish: true})
        }
        return this.componentDidMount()


    }


componentDidMount() {
    const timer = setInterval(() => {

        if (this.state.answerTime || this.state.finish){
            clearInterval(timer)
        }else{
            this.setState({
                time:++this.state.time
            })
            if(this.state.time/60==1){
                this.setState({
                    time1:++this.state.time1,
                    time:0
                })
            }

        }
    }, 1000)
}


    render() {


        const {quiz, rightModal, wrongModal, questionPage,points} = this.state;
        return(
            <>
                <h2 className={'timerik'}>Ժամանակ <span>{this.state.time1}</span>:<span>{this.state.time}</span></h2>
                {
                        questionPage === 0 ? <FirstQuestion points={points} description={quiz[0].description} question={quiz[0]} wrongmod={wrongModal} right={rightModal} wrong = {this.nextQuestionHandler} answer={this.answerHandler} questionPage = {questionPage}/> :
                        questionPage === 1 ? <SecondQuestion points={points} description={quiz[1].description} question={quiz[1]} wrongmod={wrongModal} right={rightModal} wrong = {this.nextQuestionHandler} answer={this.answerHandler} questionPage = {questionPage}/> :
                        questionPage === 2 ? <QuestionThree points={points} description={quiz[2].description} question={quiz[2]} wrongmod={wrongModal} right={rightModal} wrong = {this.nextQuestionHandler} answer={this.answerHandler} questionPage = {questionPage}/> :
                        questionPage === 3 ? <QuestionFour points={points} description={quiz[3].description} question={quiz[3]} wrongmod={wrongModal} right={rightModal} wrong = {this.nextQuestionHandler} answer={this.answerHandler} questionPage = {questionPage}/> :
                        questionPage === 4 ? <QuestionFive points={points} description={quiz[4].description} question={quiz[4]} wrongmod={wrongModal} right={rightModal} wrong = {this.nextQuestionHandler} answer={this.answerHandler} questionPage = {questionPage}/> :
                        questionPage === 5 ? <QuestionSix points={points} description={quiz[5].description} question={quiz[5]} wrongmod={wrongModal} right={rightModal} wrong = {this.nextQuestionHandler} answer={this.answerHandler} questionPage = {questionPage}/> :
                        questionPage === 6 ? <QuestionSeven points={points} description={quiz[6].description} question={quiz[6]} wrongmod={wrongModal} right={rightModal} wrong = {this.nextQuestionHandler} answer={this.answerHandler} questionPage = {questionPage}/> :
                        questionPage === 7 ? <QuestionEight points={points} description={quiz[7].description} question={quiz[7]} wrongmod={wrongModal} right={rightModal} wrong = {this.nextQuestionHandler} answer={this.answerHandler} questionPage = {questionPage}/> :
                        questionPage === 8 ? <QuestionNine points={points} description={quiz[8].description} question={quiz[8]} wrongmod={wrongModal} right={rightModal} wrong = {this.nextQuestionHandler} answer={this.answerHandler} questionPage = {questionPage}/> :
                        questionPage === 9 ? <LastQuestion points={points} description={quiz[9].description} question={quiz[9]} wrongmod={wrongModal} right={rightModal} wrong = {this.nextQuestionHandler} answer={this.answerHandler} questionPage = {questionPage}/>
                        : <Finish points={points}/>
            }

            </>
        )
    }
}