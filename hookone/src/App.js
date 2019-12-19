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
            <div className="container">
                {!this.state.play ? <button className={'waves-effect waves-light btn'}
                                            onClick={this.start}>Start</button> :
                    <Game />
                }
            </div>
        )
    }

}

export default App
