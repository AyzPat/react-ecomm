import React, { Component } from 'react';
import './App.css';
import Purchase from './Purchase/Purchase';

class App extends Component {
  render() {
    var items =[{
      name:'item1',price:55
    },{
      name:'item2',price:45
    },
    {
      name:'item3',price:95
    },
    {
      name:'item4',price:75
    }]
    return (
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Purchase itemArray={items}/>
      </div>
    );
  }
}

export default App;
