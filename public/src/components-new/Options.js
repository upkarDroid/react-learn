import React from 'react';

import OptionSingle from './Option';

const Options = (props) => {
    return (
        <div>
        <div className="widget-header">

            <h3 className="widget-header__title">Your options :</h3>
            <button className="button button--link" onClick={props.removeAll}>Remove All Options</button>
</div>
            {props.options.length == 0 && <p className="widget__message">Please add your options</p>}
            {
                props.options.map((val, ind) => (<OptionSingle
                    key={ind}
                    option={val}
                    count={ind+1}
                    deleteOption={props.deleteOption}

                />
                ))
            }
        </div>
    )
}

export default Options;
