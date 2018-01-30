import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, 1000)
  };

  tick(){
    this.setState({time: new Date()});
  }

  render () {

    return (
          <div className='clock'>
             <h1>Clock</h1>
            <p>
              <span>Time:</span>
              <span>{ this.state.time.toTimeString().slice(0,8) }</span>            
            </p>
            <p>
              <span>Date:</span>
              <span>{ this.state.time.toDateString() }</span>
            </p>
        </div>
    )
  }
}

export default Clock;
