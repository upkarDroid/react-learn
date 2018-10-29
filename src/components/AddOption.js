import React from 'react';

export default class AddOPtion extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            errorMsg: null
        }
    }
    onFormSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.add.value.trim();
        const error = this.props.addOneOption(option);

        if (!error) {
            //do something
            e.target.elements.add.value = "";

        }

            this.setState(() => ({ errorMsg: error }))

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="add" />
                    <button>Add OPtions</button>
                </form>
                {this.state.errorMsg && <h2>{this.state.errorMsg}</h2>}
            </div>
        );
    }
}
