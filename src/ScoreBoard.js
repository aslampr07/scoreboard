import React from 'react';

export default class ScoreBoard extends React.Component {

    constructor(props) {
        super(props)

        this.messageRecieved = this.messageRecieved.bind(this)

        this.channel = new BroadcastChannel("score");
        this.channel.onmessage = this.messageRecieved;

        this.state = {
            teamA: 0,
            teamB: 0
        }
    }

    messageRecieved(e) {
        this.setState(e.data)
    }


    render() {
        return (
            <div>
                <h1>Scoreboard</h1>
                <h2>Team A: {this.state.teamA}</h2>
                <h2>Team B: {this.state.teamB}</h2>
            </div>
        )
    }
}