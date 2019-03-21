import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    render() {
        state = {
            characters: [
                {
                    name: 'Charlie',
                    job: 'Janitor',
                },
                {
                    name: 'Mac',
                    job: 'Bouncer',
                },
                {
                    name: 'Dee',
                    job: 'Aspring actress',
                },
                {
                    name: 'Dennis',
                    job: 'Bartender',
                },
            ]
        }

        removeCharacters = index => {
            const {characters} = this.state;
            this.setState({
                characters: characters.filter((character , i) => {
                    return i !== index;
                })
            })
        }

        return (
            <div className="container-fluid">
                <Table characterDate={characters} removeCharacters={this.removeCharacters}/>
            </div>
        )
    }
}

export default App;