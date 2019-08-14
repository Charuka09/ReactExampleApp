import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        Persons: [
            { name: 'bear', age: 25 },
            { name: 'bu nny', age: 25 }
        ],
        showPersons: false
    }
    switchNameHandler = (newName) => {
        //don't do this: this.state.Persons[0].name = 'charuka';
        this.setState(
            {
                Persons: [
                    { name: newName, age: 25 },
                    { name: 'hasini', age: 25 }
                ]
            })
    }
    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow })
    }

    nameChangeHandler = (event) => {
        this.setState(
            {
                Persons: [
                    { name: 'charuka', age: 25 },
                    { name: event.target.value, age: 25 }
                ]
            })
    }
    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>React practice app</h1>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>switch Name</button>
                {
                    this.state.showPersons === true ?
                        <div>
                            <Person
                                name={this.state.Persons[0].name} age={this.state.Persons[0].age}>Hi charuka</Person>
                            <Person
                                name={this.state.Persons[1].name} age={this.state.Persons[1].age}
                                click={this.switchNameHandler.bind(this, 'Bandara')}
                                changed={this.nameChangeHandler}>Hi hasini
                            </Person>
                        </div> : null
                }
            </div>
        );
    }
}

export default App;