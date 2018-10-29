import React from 'react';
import AddOPtion from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import OptionsModal from './OptionsModal';

class LearnReact extends React.Component {


    state = {
        title: "React using components",
        subtitle: "Hand your life to the computer program",
        options: this.props.options,
        selectedOption: undefined

    }



    componentDidMount = () => {
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

    componentDidUpdate = (prevProps, prevState) => {
        console.log("componentDidUpdate : fired by react everytime state changes. this.state and this.props are the new values here, args are old values")
        if (this.state.options.length != prevState.options.length) {
            console.log('saving data');

            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount = () => {
        console.log("componentWillUnmount")
    }

    randomAction = () => {

        const randNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randNum];

        this.setState(() => ({
            selectedOption
        }))
    }

    closeModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    removeAll = () => {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    addOption = (val) => {
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

    deleteOption = (option) => {
        console.log(option);
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((val) => (option !== val))
            }
        })


    }

    render = () => {

        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        decision={this.randomAction}
                    />

                    <div className="widget">
                        <Options
                            options={this.state.options}
                            removeAll={this.removeAll}
                            deleteOption={this.deleteOption}

                        />
                        <AddOPtion
                            addOneOption={this.addOption}
                        />
                    </div>
                </div>
                <OptionsModal
                    selectedOption={this.state.selectedOption}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}


LearnReact.defaultProps = {
    options: ["option1", "option2", "option3", "optionFour"]
}


export default LearnReact;