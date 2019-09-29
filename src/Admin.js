import React from 'react';


export default class Admin extends React.Component {


  constructor(props) {
    super(props)


    this.increment = this.increment.bind(this)

    this.channel = new BroadcastChannel("score");
    this.state = {
      teamA: 0,
      teamB: 0
    }
  }

  increment(team) {

    let teamA = this.state.teamA 
    let teamB = this.state.teamB

    switch (team) {
      case "A": 
      teamA = this.state.teamA + 1
      this.setState({
        teamA: teamA
      })
        break;
      case "B": 
      teamB = this.state.teamB + 1
      this.setState({
        teamB: teamB
      })
        break;
    }

    this.channel.postMessage({ teamA, teamB })

  }

  decrement(team) {

    let teamA = this.state.teamA 
    let teamB = this.state.teamB
    switch (team) {
      case "A": 
      teamA = this.state.teamA - 1
      this.setState({
        teamA: teamA
      })
        break;
      case "B": 
      teamB = this.state.teamB - 1
      this.setState({
        teamB: teamB
      })
        break;
    }

    this.channel.postMessage({ teamA, teamB })
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.increment("A")}>+</button>
          <span>{this.state.teamA}</span>
          <button onClick={() => this.decrement("A")}>-</button>
        </div>
        <div>
          <button onClick={() => this.increment("B")}>+</button>
          <span>{this.state.teamB}</span>
          <button onClick={() => this.decrement("B")}>-</button>
        </div>
      </div>
    )
  }
}
