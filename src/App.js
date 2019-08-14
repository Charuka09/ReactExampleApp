import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        Persons: [
            { name: 'bear', age: 25 },
            { name: 'bunny', age: 25 }
        ]
    }
    switchNameHandler = () => {
        //don't do this: this.state.Persons[0].name = 'charuka';
        this.setState(
            {
                Persons: [
                    { name: 'charuka', age: 25 },
                    { name: 'hasini', age: 25 }
                ]
            })
    }
    render() {

        return (
            <div className="App">
                <h1>React practice app</h1>
                <button onClick={this.switchNameHandler}>switch Name</button>
                <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age}>Hi charuka</Person>
                <Person name={this.state.Persons[1].name} age={this.state.Persons[1].age}>Hi hasini</Person>
            </div>
        );
    }
}

export default App;