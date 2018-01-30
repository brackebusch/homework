import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    }
  }

  render() {
    return(
      <input type="text"/>
      <ul>
        {this.props.map}
      </ul>
    )
  }
}

export default Autocomplete;