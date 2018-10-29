class LearnReact extends React.Component {

    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.randomAction = this.randomAction.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state = {
            title: "React using components",
            subtitle: "give your life to the computer program",
            options: ["option1", "option2", "option3", "optionFour"]

        }
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

    render() {

        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Action hasOptions={this.state.options.length > 0} />
                <Options options={this.state.options} removeAll={this.removeAll} />
                <AddOPtion addOneOption={this.addOption} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>{this.props.title || "Default Title"}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>);
    }
}

class Action extends React.Component {
    decision() {
        alert('What should you do ?')
    }
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.decision}>What should i do ?</button>
            </div>
        )
    }
}

class Options extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.removeAll = this.removeAll.bind(this);
    // }
    // removeAll(){
    //     console.log(this);
    //     this.props.options.pop();

    // }
    render() {

        return (
            <div>
                <h3>here are your options from options Component</h3>
                <button onClick={this.props.removeAll}>Remove All Options</button>

                {/* <Option options={options}/> */}
                {
                    this.props.options.map((val, ind) => <OptionSingle key={ind} option={val} />)
                }
            </div>
        )
    }
}

class OptionSingle extends React.Component {
    render() {
        return (
            <p>{this.props.option}</p>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <ol>
                {this.props.options.map((val, ind) => <li key={ind}>{val}</li>)}
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
            this.setState(() => {
                return {
                    errorMsg: error
                }
            })
        }
        e.target.elements.add.value = "";


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

const jsx = (
    <LearnReact />
);


ReactDOM.render(jsx, document.getElementById('app'));