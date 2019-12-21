import React from 'react'
import './App.css'
import Game from "./game/Game";
import Rules from "./rules/Rules";


class App extends React.Component {
    state = {
        play: false,
        rules:false,
        time:0
    }

    start = () => {
        this.setState({
            play: true,
            rules:false
        })
    }
    rulesHandler = () =>{
        this.setState({
            rules:true
        })
    }
    closeRulesHandler = () =>{
        this.setState({
            rules:false
        })
    }
    render() {
        return (
            <div className="containers">
                {!this.state.play ?
                    <div className={'background'}>
                        <button className={'startGame'}
                                onClick={this.start}>սկսել խաղը</button>
                        <button className={'rules'}
                                onClick={this.rulesHandler}
                        >կանոններ
                        </button>
                        {this.state.rules ? <Rules closepopup={this.closeRulesHandler}/> : null}
                    </div>  :
                    <Game start={this.start} />
                }
            </div>
        )
    }

}

export default App
