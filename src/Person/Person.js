import React from 'react';


const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name} a {props.age} person!</p>
        </div>
    )
};

export default person;

