import React from 'react';

class Headers extends React.Component {
  render() {
    let tabIndex = this.props.tabIndex;
    let titles = this.props.tabArr.map( (tab, idx) => {
      let title = tab.title
      let cssClass = '';
      if (idx === tabIndex){
        cssClass = 'makeBold'
      }

      return(
        <li
          key={idx}
          className={cssClass}
          onClick={this.props.tabClick.bind(null, idx)}>
        {"-"}{title}{"-"}
        </li>
      );
    });
    return (
     <ul className='tab-title'>
        { titles }
     </ul>
    );
  }
}


class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabIndex: 0
    }

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(idx){
    this.setState({tabIndex: idx});
  }


  render() {
    let currentTab = this.props.tabArr[this.state.tabIndex]

    return(
      <div>
        <h1>Tabs</h1>
          <Headers
            tabIndex = {this.state.tabIndex}
            tabArr = {this.props.tabArr}
            tabClick = { this.selectTab }
          />
          <p>{currentTab.content}</p>
      </div>
    )
  }

}

export default Tabs;