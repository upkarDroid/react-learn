import React from 'react';

export default class AddOPtion extends React.Component {
    state = {
        errorMsg: null
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const option = e.target.elements.add.value.trim();
        const error = this.props.addOneOption(option);

        if (!error) {
            //do something
            e.target.elements.add.value = "";

        }

            this.setState(() => ({ errorMsg: error }))

    }
    render = () => {
        return (
            <div>
                {this.state.errorMsg && <p className="add-option-error">{this.state.errorMsg}</p>}
                <form className="add-option" onSubmit={this.onFormSubmit}>
                    <input className="add-option__input" type="text" name="add" />
                    <button className="button">Add Me</button>
                </form>
            </div>
        );
    }
}
