import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>NAME</th>
                <th>JOB</th>
            </tr>
        </thead>
    )
};
const TableBody = props => {
    const rows = props.characterDate.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick= {() => props.removeCharacters(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
};
class Table extends Component {
    render() {
        const {characterDate} = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterDate={characterDate} removeCharacters={removeCharacters}/>
            </table>
        )
    }
}

export default Table;