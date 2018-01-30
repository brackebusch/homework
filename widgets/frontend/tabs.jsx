import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 0
    }
    this.selected = this.selected.bind(this);
  }

  selected(num){
    this.setState({selectedTab: num});
  }


  render() {
    let currentWindow = this.props.content[this.state.selectedTab]

    return(
      <div>
        <h1>Tabs</h1>
        <article>
          {currentWindow.content}
        </article>
      </div>
    )
  }

}

export default Tabs;