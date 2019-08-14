import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am a person</p>
            <p>Name= {props.name}</p>
            <p>Name= {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;