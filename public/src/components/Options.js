import React from 'react';

import OptionSingle from './Option';

const Options = (props) => {
    return (
        <div>
            <h3>here are your options from options Component</h3>
            <button onClick={props.removeAll}>Remove All Options</button>

            {/* <Option options={options}/> */}
            {
                props.options.map((val, ind) => (<OptionSingle
                    key={ind}
                    option={val}
                    deleteOption={props.deleteOption}

                />
                ))
            }
        </div>
    )
}

export default Options;
