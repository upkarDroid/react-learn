import React from 'react';

const Option = (props) => {
    return (
        <p>
            {props.option}&nbsp;&nbsp;&nbsp;
        <button onClick={(e) => {
                props.deleteOption(props.option)
            }}
            >x</button>
        </p>
    );
}

export default Option;