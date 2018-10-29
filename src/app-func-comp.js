class LearnReact extends React.Component {

    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.randomAction = this.randomAction.bind(this);
        this.addOption = this.addOption.bind(this);
        this.deleteOption = this.deleteOption.bind(this);
        this.state = {
            title: "React using components",
            subtitle: "Hand your life to the computer program",
            options: props.options

        }
    }

    componentDidMount() {
        console.log("componentdidMount : fired by react when component mounts")
        console.log('fetching data');
        try {


            const optionsArr = localStorage.getItem('options');

            if (optionsArr) {
                this.setState(() => ({
                    options: JSON.parse(optionsArr)
                }));

            }
        } catch (e) {
            //do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate : fired by react everytime state changes. this.state and this.props are the new values here, args are old values")
        if (this.state.options.length != prevState.options.length) {
            console.log('saving data');

            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    randomAction() {
        alert("picking first option " + this.state.options[0])
    }

    removeAll() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    addOption(val) {
        if (!val) {
            return 'please enter a valid value';
        } else if (this.state.options.indexOf(val) > -1) {
            return `\"${val}\" is already included`;
        } else {
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat(val)
                }
            });
        }
    }

    deleteOption(option) {
        console.log(option);
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((val) => (option !== val))
            }
        })


    }

    render() {

        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    decision={this.randomAction}
                />
                <Options options={this.state.options} removeAll={this.removeAll} deleteOption={this.deleteOption} />
                <AddOPtion addOneOption={this.addOption} />
            </div>
        );
    }
}


LearnReact.defaultProps = {
    options: ["option1", "option2", "option3", "optionFour"]
}
const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.title || "Default Title"}</h1>
            <h2>{props.subtitle}</h2>
        </div>);
}
// class Header extends React.Component {
//     render() {

//     }
// }

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.decision}>What should i do ?</button>
        </div>
    );
}

// class Action extends React.Component {
//     decision() {
//         alert('What should you do ?')
//     }
//     render() {

//         )
//     }
// }



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

const OptionSingle = (props) => {
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


class Option extends React.Component {
    render() {
        return (
            <ol>
                {this.props.options.map((val, ind) => (
                    <li key={ind}>
                        {val}
                        <button onClick={(e) => {
                            props.deleteOption(val)
                        }}></button>
                    </li>))}
            </ol>


        );
    }
}

class AddOPtion extends React.Component {
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

        if (error) {
            //do something
            this.setState(() => ({ errorMsg: error }))
        } else {
            e.target.elements.add.value = "";
        }


    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="add" />
                    <button>Add</button>
                </form>
                {this.state.errorMsg && <h2>{this.state.errorMsg}</h2>}
            </div>
        );
    }
}



ReactDOM.render(<LearnReact options={["devils den", "district 13"]} />, document.getElementById('app'));