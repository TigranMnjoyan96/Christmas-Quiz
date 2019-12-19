import React from 'react'
import './App.css'
import Game from "./game/Game";


class App extends React.Component {
    state = {
        play: false
    }

    start = () => {
        this.setState({
            play: true
        })
    }
    render() {
        return (
            <div className="containers">
                {!this.state.play ?
                    <div className={'background'}>
                        <button className={'startGame'}
                                onClick={this.start}>սկսել խաղը</button>
                        <button className={'rules'}>կանոններ
                        </button>
                    </div>  :
                    <Game />
                }
            </div>
        )
    }

}

export default App
