import React from 'react';

const Action = (props) => (
        <div>
            <button className="big-botton" disabled={!props.hasOptions} onClick={props.decision}>What should i do ?</button>
        </div>
    );


export default Action;