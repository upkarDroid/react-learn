import React from 'react';

const Option = (props) => {
    return (
        <p className="option">
        <p className="option__text">{props.count}.&nbsp;{props.option}</p>
            
        <button className="button button--link" onClick={(e) => {
                props.deleteOption(props.option)
            }}
            >Remove</button>
        </p>
    );
}

export default Option;