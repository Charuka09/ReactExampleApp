import React, {Component} from 'react';
import './index.css';

class Table extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>JOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Charuka</td>
                        <td>Software Engineer</td>
                    </tr>
                    <tr>
                        <td>Chameera</td>
                        <td>Software Engineer</td>
                    </tr>
                    <tr>
                        <td>Charith</td>
                        <td>Software Engineer</td>
                    </tr>
                    <tr>
                        <td>Donishka</td>
                        <td>Software Engineer</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;