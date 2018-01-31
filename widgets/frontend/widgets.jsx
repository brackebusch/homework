import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';


const tabArr = [
  {title: 'doe', content: "a female deer"},
  {title: 'rae', content: "drop of golden sun"},
  {title: 'me', content: "a name I call myself"}  
]

const names = ["Alyssia","Allison","Amy","Frank","Fred",
  "Fender","Joe","Zach","Zebulon","Xander","Xavier"]

class Root extends React.Component {

  render() {
    return(
      <div>
        <h1>This is in the root</h1>
        <Clock />
        <Tabs tabArr={tabArr}/>
        <Weather />
        <Autocomplete names={names}/>
      </div>
    )
  }
}


document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root)
})