import React from 'react';


export default class Admin extends React.Component {


  constructor(props){
    super(props)

    this.increment = this.increment.bind(this)

    this.channel = new BroadcastChannel("score");
  }

  increment(){
    this.channel.postMessage("This is from admin side")
  }

  render() {
    return (
      <div>
        <h1>Admin panel</h1>
        <button onClick={this.increment}>Increase</button>
      </div>
    )
  }
}
