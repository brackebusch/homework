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
      <div>
        <input type="text"/>
        <ul>
          <h2>Autocomplete Here</h2>
        </ul>
      </div>
    )
  }
}

export default Autocomplete;