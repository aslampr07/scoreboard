import React from 'react';

export default class ScoreBoard extends React.Component {

    constructor(props) {
        super(props)


        // this.messageRecieved = this.messageRecieved.bind(this)

        this.channel = new BroadcastChannel("score");
        this.channel.onmessage = this.messageRecieved;
    }

    messageRecieved(e){
        alert(e.data)
    }


    render() {
        return (
            <h1>Scoreboard</h1>
        )
    }
}