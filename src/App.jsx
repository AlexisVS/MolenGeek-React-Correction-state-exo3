import React, { Component } from 'react';

class App extends Component {
  tableau = ["Alexis", "Dorian", "Yassin", "Andy", "Ilyas"]
  state = {
    element1: this.tableau[0],
    element2: this.tableau[1],
    element3: this.tableau[2],
    element4: this.tableau[3],
    element5: this.tableau[4],
  }
  removeEl = () => {
    let newState
    newState = this.state
    delete newState[Object.keys(newState)[0]]
    this.setState(newState)
  }
  
  changeColor = () => Object.keys(this.state).length === 1 && document.body.classList.add("orange") || Object.keys(this.state).length === 0 && document.body.classList.add('rouge') 
  render() {
    let tableauLength = Object.keys(this.state).length
    console.log(tableauLength);
    console.log(this.state);
    return (
      <div>
        <p>{tableauLength}</p>
        <button onClick={this.removeEl}>supprimer element</button>
      {this.changeColor()}
      </div>
    );
  }
}

export default App;